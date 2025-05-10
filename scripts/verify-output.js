/**
 * Simple script to verify the output HTML files
 */
const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'out');

// Check if index.html exists and has proper content
const indexPath = path.join(outDir, 'index.html');
if (fs.existsSync(indexPath)) {
  const content = fs.readFileSync(indexPath, 'utf-8');
  console.log('Index file exists');
  
  // Check for common issues
  if (content.includes('<html') && content.includes('<body') && content.includes('<div id="__next"')) {
    console.log('✅ Index file has proper HTML structure');
  } else {
    console.error('❌ Index file might be missing proper HTML structure');
  }
  
  // Check for script tags
  const scriptCount = (content.match(/<script/g) || []).length;
  console.log(`Found ${scriptCount} script tags`);
  
  // Check for potential loading issues
  if (content.includes('Loading your medical e-commerce experience')) {
    console.log('⚠️ Found loading message in static HTML - might indicate client-side hydration issue');
  }
} else {
  console.error('❌ Index file not found');
}

// Check for 404 page
const notFoundPath = path.join(outDir, '404.html');
if (fs.existsSync(notFoundPath)) {
  console.log('✅ 404 page exists');
} else {
  console.error('❌ 404 page not found');
}

console.log('Verification complete!'); 