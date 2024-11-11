const fs = require('fs');
const path = require('path');

/**
 * Reads the contents of a file.
 * 
 * @param {string} filePath - The path to the file to be read.
 * @returns {Promise<string>} The contents of the file.
 */
function readFileContents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(filePath), 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Usage example:
const filePath = './example.txt';

readFileContents(filePath)
  .then(contents => {
    console.log('File Contents:', contents);
  })
  .catch(error => {
    console.error('Error reading file:', error);
  });
