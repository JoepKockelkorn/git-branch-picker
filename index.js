(async () => {
  const inquirer = require('inquirer');
  const fs = require('fs');
  const simpleGit = require('simple-git/promise')();

  const { current, all: branches } = await simpleGit.branchLocal();
  const filteredBranches = branches.filter(b => b !== current);
  const { branch } = await inquirer.prompt({
    name: 'branch',
    message: 'Which branch would you like to checkout?',
    choices: [...filteredBranches],
    type: 'list',
  });
  console.log(`Checking out ${branch}`);
  await simpleGit.checkout(branch);
})().catch(e => console.error(e.message));
