// const fs = require('fs');
const generateSite = require('./utils/generate-site.js');

const writeFile = fileContent => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there is an error, reject the promise and send the error to the promise's .catch() method
            if (err) {
                reject(err);
                // return out of the function here to make sure the promise doesnt accidentally execute the resolve() function as well
                return;
            }
            // if everything went well, resolve with a promise and send the successful data to the .then() method
            resolve({
                ok: true,
                message: 'File created'
            });
        });
    });
};

const copyFile = () => {
    return new Promise ((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Style sheet created'
            });
        });
    });
};


module.exports = {writeFile, copyFile};