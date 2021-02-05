// 1. the the user's username and password and check if they exist
// 2. if they do...\
//  a. Update the token, and send it back\
// 3. If they don't, then respond accordingly

const config = {
    host: "127.0.0.1",
    user: "bmilitzer",
    password: "s8mbt10a",
    database: "promisesasync",
}

const mysql = require('mysql');

const connection = mysql.createConnection(config);
connection.connect((error) => {
    if (error) throw error;
    console.log("Connected!");
});

const username = `tgarcez`;
const password = `helloworld2`;

const checkLoginQuery = `SELECT * FROM Users WHERE username = "${username}" AND password = "${password}"`;

// 08b5737326de8cd4a93e9ab8f9cd2622
// 14f999f8a74537ff362f2b66b3dee61f

function checkLogin() {
    return new Promise((resolve, reject) => {
        connection.query(checkLoginQuery, (error, results) => {
           if (error) {
               reject(error);
           } else if (results.length === 1) {
               resolve(results[0].id);
           } else {
               resolve(false);
           }
        });
    });
}

async function updateToken() {
    console.log("Updating Token...");
    const userId = await checkLogin();
    console.log(userId);

    if (userId) {
        const updateTokenQuery = `UPDATE Users SET token = "123" WHERE id = ${userId}`;

        connection.query(updateTokenQuery, (error, results) => {

        });
        console.log("User Updated");
    }
}

updateToken();

setTimeout(() => {
    return process.exit(22);
}, 5000);