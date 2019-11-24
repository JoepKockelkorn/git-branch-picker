const chalk = require('chalk');

module.exports = {
  logSuccess: function(message) {
    console.log(chalk.green(message));
  },
  log: function(message) {
    console.log(message);
  },
  logError: function(message) {
    console.error(chalk.red(message));
  },
};
