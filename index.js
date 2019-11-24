(async () => {
  const inquirer = require('inquirer');
  const fs = require('fs');
  const simpleGit = require('simple-git/promise')();

  const { current, all: branches } = await simpleGit.branchLocal();
  const filteredBranches = branches.filter(b => b !== current);
  if (filteredBranches.length === 0) {
    console.log('Your current branch is the only branch.');
    return;
  }
  const { branch } = await inquirer.prompt({
    name: 'branch',
    message: 'Which branch would you like to checkout?',
    choices: [...filteredBranches],
    type: 'list',
  });
  console.log(`Checking out ${branch}`);
  await simpleGit.checkout(branch);
  console.log(`Successfully checked out ${branch}`);
})().catch(e => console.error(e.message));
