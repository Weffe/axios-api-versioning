const chalk = require('chalk');

const log = (str) => {
    console.log(`${chalk.yellow('INFO:')} ${str}`)
}

function print_getBooksByQueryString(res) {
    console.log(chalk.yellow('----'));
    log(chalk.blue('executing "getBooksByQueryString"...'));
    log(chalk.white('Successfully got some data!'))
    log(chalk.green(
        JSON.stringify(res.data, null, 2)
    ));

    const requestUrl = res.config.baseURL + res.request.path;

    log(chalk.white('Request URL used -> ') + chalk.magenta(`"${requestUrl}"`))
    console.log(chalk.yellow('----'));
}

function print_getBooksByUrlPath(res) {
    console.log(chalk.yellow('----'));
    log(chalk.blue('executing "getBooksByQueryString"...'));
    log(chalk.white('Successfully got some data!'))
    log(chalk.green(
        JSON.stringify(res.data, null, 2)
    ));
    log(chalk.white('Request URL used -> ') + chalk.magenta(`"${res.config.url}"`))
    console.log(chalk.yellow('----'));
}

function print_getBooksByMediaType(res) {
    console.log(chalk.yellow('----'));
    log(chalk.blue('executing "getBooksByMediaType"...'));
    log(chalk.white('Successfully got some data!'))
    log(chalk.green(
        JSON.stringify(res.data, null, 2)
    ));

    const acceptHeader = res.config.headers["Accept"];

    log(chalk.white('Accept Header used -> ') + chalk.magenta(`"${acceptHeader}"`))
    console.log(chalk.yellow('----'));
}

module.exports = {
    print_getBooksByQueryString,
    print_getBooksByMediaType,
    print_getBooksByUrlPath
}