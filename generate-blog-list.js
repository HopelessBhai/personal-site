const fs = require('fs');
const path = require('path');

const blogsDir = path.join(__dirname, 'blogs');
const outputFile = path.join(__dirname, 'blog-list.json');

const files = fs.readdirSync(blogsDir)
    .filter(file => file.endsWith('.md') && file.match(/^\d{4}-\d{2}-\d{2}-/))
    .sort()
    .reverse();

fs.writeFileSync(outputFile, JSON.stringify(files, null, 2));
console.log(`Generated blog-list.json with ${files.length} files`);