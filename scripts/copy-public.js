/**
 * Simple script to copy files from public to out directory
 * Works cross-platform on both Windows and Linux (Netlify)
 */
const fs = require('fs');
const path = require('path');

// Define directories
const publicDir = path.join(process.cwd(), 'public');
const outDir = path.join(process.cwd(), 'out');

console.log('Starting post-build process...');
console.log(`Copying files from ${publicDir} to ${outDir}`);

// Ensure out directory exists
if (!fs.existsSync(outDir)) {
  console.log('Creating output directory...');
  fs.mkdirSync(outDir, { recursive: true });
}

// Function to copy file
function copyFile(source, destination) {
  try {
    const data = fs.readFileSync(source);
    fs.writeFileSync(destination, data);
    console.log(`✅ Copied: ${path.relative(process.cwd(), destination)}`);
  } catch (err) {
    console.error(`❌ Error copying ${source}:`, err.message);
  }
}

// Function to copy directory recursively
function copyDir(source, destination) {
  // Check if source directory exists
  if (!fs.existsSync(source)) {
    console.log(`Source directory ${source} doesn't exist. Skipping.`);
    return;
  }

  // Create destination directory if it doesn't exist
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  // Read source directory contents
  const entries = fs.readdirSync(source, { withFileTypes: true });

  // Process each entry
  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const destPath = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      // Recursively copy subdirectories
      copyDir(sourcePath, destPath);
    } else {
      // Copy files
      copyFile(sourcePath, destPath);
    }
  }
}

// Copy public directory to out
try {
  copyDir(publicDir, outDir);
  
  // Create 404.html from index.html (for SPA routing)
  const indexPath = path.join(outDir, 'index.html');
  const notFoundPath = path.join(outDir, '404.html');
  
  // Ensure index.html is in the output directory
  if (fs.existsSync(indexPath)) {
    copyFile(indexPath, notFoundPath);
  } else {
    console.log('No index.html found in output directory');
    
    // If no index.html exists in output, copy the one from public
    const publicIndexPath = path.join(publicDir, 'index.html');
    if (fs.existsSync(publicIndexPath)) {
      console.log('Copying index.html from public directory');
      copyFile(publicIndexPath, indexPath);
      copyFile(publicIndexPath, notFoundPath);
    } else {
      console.log('No index.html found in public directory');
    }
  }
  
  console.log('Post-build process completed successfully!');
} catch (error) {
  console.error('❌ Error during post-build process:', error.message);
  process.exit(1);
} 