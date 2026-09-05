import { defineConfig, loadEnv } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import type { IncomingMessage, ServerResponse } from 'http'
import chatHandler from './api/chat'

function localApi(): Plugin {
  return {
    name: 'local-api',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res, next) => {
        if (req.method !== 'POST') {
          next()
          return
        }

        const chunks: Buffer[] = []
        for await (const chunk of req) {
          chunks.push(Buffer.from(chunk))
        }

        const request = req as IncomingMessage & { body?: unknown }
        request.body = JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}')

        const response = res as ServerResponse & {
          status: (code: number) => ServerResponse
          json: (body: unknown) => void
        }
        response.status = (code) => {
          res.statusCode = code
          return response
        }
        response.json = (body) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(body))
        }

        await chatHandler(request, response)
      })
    }
  }
}

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

  return {
    plugins: [react(), localApi()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    }
  }
})
