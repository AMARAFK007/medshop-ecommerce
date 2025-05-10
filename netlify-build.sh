#!/bin/bash

# Build Next.js app
echo "Building Next.js application..."
npm run build

# Ensure 404.html exists
echo "Creating 404.html..."
cp out/index.html out/404.html

# Done!
echo "Build complete!" 