import path from "path";
import fs from 'fs';
import { fileURLToPath } from "url";

interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

interface ChatRequest {
    message: string;
    history?: Message[];
    chatCount?: number;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const systemPrompt = fs.readFileSync(
    path.join(__dirname, 'content.txt'),
    'utf-8'
);

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'POST only' });
        return;
    }

    try {
        // Vercel dev (Node.js) vs Prod (Web Request)
        let bodyRaw: any;
        if (typeof req.json === 'function') {
            // Production Web Request
            bodyRaw = await req.json();
        } else {
            // Vercel dev Node.js Request
            bodyRaw = req.body || {};
        }

        const { message, history = [], chatCount = 0 } = bodyRaw as ChatRequest;

        if (chatCount >= 10) {
            res.status(200).json({
                role: 'assistant',
                isLimit: true
            });
            return;
        }

        if (!message || message.trim().length === 0 || message.length > 4000) {
            res.status(400).json({ error: 'Invalid message' });
            return;
        }

        const apiKey = process.env.PERPLEXITY_API_KEY;
        if (!apiKey) {
            res.status(500).json({ error: 'API key missing' });
            return;
        }

        const messages: Message[] = [
            {
                role: 'system',
                content: systemPrompt,
            },
            ...history.slice(-10),
            { role: 'user', content: message }
        ];

        const response = await fetch('https://api.perplexity.ai/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'sonar',
                messages,
                max_tokens: 500,
                temperature: 0.7,
                stream: false,
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('Perplexity:', error);
            res.status(500).json({ error: 'AI service error' });
            return;
        }

        const data = await response.json() as any;
        const assistantMessage = data.choices?.[0]?.message?.content || '';

        res.status(200).json({
            role: 'assistant',
            content: assistantMessage,
            model: data.model || 'unknown',
            usage: data.usage || {},
        });

    } catch (error) {
        console.error('Chat error:', error);
        res.status(500).json({ error: 'Server error' });
    }
}
