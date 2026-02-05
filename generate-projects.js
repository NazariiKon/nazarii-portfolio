// generate-projects.js
import fs from 'fs';
import path from 'path';

const menuPath = './public/projects/menu';
const jobsPath = './public/projects/jobsdublin';

const menuFiles = fs.readdirSync(menuPath)
  .filter(f => f.endsWith('.png'))
  .map(f => `/projects/menu/${f}`);

const jobsFiles = fs.readdirSync(jobsPath) 
  .filter(f => f.endsWith('.png'))
  .map(f => `/projects/jobsdublin/${f}`);

const projects = {
  menu: menuFiles,
  jobsdublin: jobsFiles
};

fs.writeFileSync('./src/projects-images.ts', 
  `export const PROJECTS_IMAGES = ${JSON.stringify(projects, null, 2)};`
);

console.log('✅ Generated projects-images.ts');
