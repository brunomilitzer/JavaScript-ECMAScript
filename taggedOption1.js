let city = `São Paulo`;
let userId = 7;
let command = `SELECT *`;
let table = `password`;
let whereClauses = [
    `uid = ${6+1}`,
    `OR city = ${city}`
];

let order = `desc`;

const validateQuery = checkQuery`${command} FROM ${table} WHERE ${whereClauses} ORDERY BY ${order}`;
console.log(validateQuery);

function checkQuery(strings, command, table, whereClauses, order) {
    if ((command.indexOf(`SELECT`)) == -1 && (command.indexOf(`UPDATE`)) == -1) {
        return (`You are only alloed to make SELECT AND UDPATE.`)
    } else if (table == `passwords`) {
        return ('You cannot change the table');
    } else if (!order) {
        order = ` ORDER BY asc`;
    }
    const finalQuery = `${strings[0]}${command}${strings[1]}${table}${strings[2]}${whereClauses.join(' ')}${strings[3]}${order}`;

    return finalQuery;
}