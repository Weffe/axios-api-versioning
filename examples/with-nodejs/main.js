const {
    getBooksByMediaType,
    getBooksByQueryString,
    getBooksByUrlPath
} = require('./api');
const {
    print_getBooksByQueryString,
    print_getBooksByMediaType,
    print_getBooksByUrlPath
} = require('./print');
const chalk = require('chalk');
var util = require('util')
const { startBackendServer } = require('./backend/server');

async function main() {
    const server = startBackendServer();
    let res;

    console.log(chalk.bgBlue.whiteBright('---- Running with-nodejs example ----'));

    res = await getBooksByQueryString();
    print_getBooksByQueryString(res);

    res = await getBooksByUrlPath();
    print_getBooksByUrlPath(res);

    res = await getBooksByMediaType();
    print_getBooksByMediaType(res);

    server.close();
}

main();