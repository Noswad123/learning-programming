const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const serviceName = process.argv[2];

if (!serviceName) {
    console.error('Please provide a service name.');
    process.exit(1);
}

const serviceFilePath = path.join(__dirname, 'src', 'services', `${serviceName}.js`);
const testFilePath = path.join(__dirname, 'test', 'unit', 'services', `${serviceName}.spec.js`);

if (!fs.existsSync(serviceFilePath)) {
    console.error(`Service file not found: ${serviceFilePath}`);
    process.exit(1);
}

if (!fs.existsSync(testFilePath)) {
    console.error(`Test file not found: ${testFilePath}`);
    process.exit(1);
}

const serviceFileContent = fs.readFileSync(serviceFilePath, 'utf8');
const testFileContent = fs.readFileSync(testFilePath, 'utf8');

const prompt = `
Write unit tests given the following service and its corresponding unit test template

Service file
${serviceFileContent}

Test file
${testFileContent}
`;

execSync(`echo "${prompt.replace(/"/g, '\\"')}" | pbcopy`);
console.log('Prompt copied to clipboard.');
