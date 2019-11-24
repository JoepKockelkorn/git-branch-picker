(async () => {
  const inquirer = require('inquirer');
  const fs = require('fs');
  const simpleGit = require('simple-git/promise')();

  const { current, all: branches } = await simpleGit.branchLocal();
  const filteredBranches = branches.filter(b => b !== current);
  if (filteredBranches.length === 0) {
    log('Your current branch is the only branch.');
    return;
  }
  const { branch } = await inquirer.prompt({
    name: 'branch',
    message: 'Which branch would you like to checkout?',
    choices: [...filteredBranches],
    type: 'list',
  });
  await simpleGit.checkout(branch);
  logSuccess(`Successfully checked out ${branch}`);
})().catch(e => {
  const message = e.message || 'Oops, something went wrong...';
  logError(message);
});

const chalk = require('chalk');
function logSuccess(message) {
  console.log(chalk.green(message));
}

function log(message) {
  console.log(message);
}

function logError(message) {
  console.error(chalk.red(message));
}
