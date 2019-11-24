(async () => {
  const inquirer = require('inquirer');
  const fs = require('fs');
  const git = require('isomorphic-git');
  git.plugins.set('fs', fs);

  const dir = './';
  const currentBranch = await git.currentBranch({ dir });
  const branches = await git.listBranches({ dir });
  const { branch } = await inquirer.prompt({
    name: 'branch',
    message: 'Which branch would you like to checkout?',
    choices: [...branches],
    type: 'list',
  });
  if (branch === currentBranch) {
    console.log(`Branch '${branch}' is already checked out.`);
  } else {
    console.log(`Checking out ${branch}`);
  }
  await git.checkout({ dir, ref: branch });
})().catch(e => console.error(e.message));
