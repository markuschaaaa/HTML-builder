const path = require('path');
const { mStyles } = require('./mStyles');

const filesPath = path.join(__dirname, 'styles');
const newFilePath = path.join(__dirname, 'project-dist');

mStyles(filesPath, newFilePath, 'bundle.css');