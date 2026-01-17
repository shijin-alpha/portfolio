#!/bin/bash
set -e

echo "Installing dependencies..."
npm ci

echo "Building project..."
npx vite build

echo "Build completed successfully!"
ls -la dist/