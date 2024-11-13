#!/bin/bash

# Set the project root directory name and create it
PROJECT_ROOT="prodigious-programmer"
mkdir $PROJECT_ROOT
cd $PROJECT_ROOT

# Setup Backend in 'server' directory
mkdir server && cd server
npm init -y

# Install NestJS modules and TypeScript dependencies
npm install reflect-metadata @nestjs/common @nestjs/core @nestjs/platform-express
npm install --save-dev typescript @types/node @nestjs/cli @nestjs/schematics

# Remove the default 'test' script and set the 'main' entry
npm pkg delete scripts.test
npm pkg set main="dist/main.js"

# Define npm scripts for build and start
npm pkg set scripts.build="nest build"
npm pkg set scripts.start:dev="nest start --watch"
npm pkg set scripts.start:prod="node dist/main.js"

# Create TypeScript configuration files
cat <<EOF > tsconfig.json
{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2021",
    "sourceMap": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "baseUrl": "./",
    "skipLibCheck": true,
    "incremental": true
  }
}
EOF

cat <<EOF > tsconfig.build.json
{
  "extends": "./tsconfig.json",
  "exclude": ["node_modules", "test", "dist", "**/*spec.ts"]
}
EOF

# Initialize a NestJS project using the CLI
nest new . --package-manager=npm --skip-git

cd ..

# Setup Frontend in 'client' directory
ng new client --routing=true --style=scss --skip-git --skip-install
cd client

# Install Angular dependencies
npm install

# Return to the project root directory
cd ../..

# Final message
echo "Full-stack application structure created successfully!"