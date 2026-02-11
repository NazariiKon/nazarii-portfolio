// generate-projects.js
import fs from 'fs';
import path from 'path';

const projectsDir = './public/projects';

function scanProjects(dir) {
  const projects = {};
  
  const projectDirs = fs.readdirSync(dir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  for (const projectName of projectDirs) {
    const projectPath = path.join(dir, projectName);
    const files = fs.readdirSync(projectPath)
      .filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'))
      .map(f => `/projects/${projectName}/${f}`);
    
    projects[projectName] = files;
  }
  
  return projects;
}

const projects = scanProjects(projectsDir);

fs.writeFileSync(
  './src/projects-images.ts',
  `export const PROJECTS_IMAGES = ${JSON.stringify(projects, null, 2)};`
);

console.log('✅ Generated projects-images.ts');
console.log('Projects found:', Object.keys(projects));
console.log('Total images:', Object.values(projects).reduce((sum, imgs) => sum + imgs.length, 0));