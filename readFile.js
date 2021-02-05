const fs = require('fs');

fs.readdir('./data', (err, files) => {

    // I want each iteration throu files to return a promise
    // Switch the forEach for a map
    // Cast the data from readFile into a String so we can manipulate it as a String
    // We are rejecting if the readFile errros
    // We are resolving the data if readFile succeeds
    // Once All promises are done, run then against Promise.all

    const filePromises = files.map((fileName, index) => {
        return new Promise((resolve, reject) => {
            fs.readFile(`./data/${fileName}`, (err, data) => {

                if (err) reject(err);
                resolve({
                    fileName,
                    data:String(data)
                });
            });
        });
    });

    // Promise.all takes 1 arg: an array of promises!
    Promise.all(filePromises).then((fileContentArray) => {
        const arrayCount = fileContentArray.map((fileObj) => {
            const matches = fileObj.data.match(/gotYa/g);

            if (matches) {
                return {
                    [fileObj.fileName]: matches.length
                };
            }

            return {
                [fileObj.fileName]: 0
            };
        });

        const orderedArray = arrayCount.sort((a, b) => {
            return a - b;
        });
        console.log(orderedArray);
    });

    // Promise.race takes 1 arg: an array of promises!
    Promise.race(filePromises).then((file) => {
        // file is the first promise in the filePromises array to resolve
        console.log("The race is over, the winner is...");
        console.log(file);
    })

});