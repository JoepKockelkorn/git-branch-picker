module.exports = async function main() {
  const inquirer = require('inquirer');
  const simpleGit = require('simple-git/promise');
  const { logSuccess, log } = require('./logging');

  const git = simpleGit().silent(true);
  const { current, all: branches } = await git.branchLocal();
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
  await git.checkout(branch);
  logSuccess(`Successfully checked out ${branch}`);
};
