(async () => {
  // const inquirer = require("inquirer");
  const fs = require('fs');
  const os = require('os');
  const path = require('path');
  const git = require('isomorphic-git');
  const branches = await git.listBranches({ dir: './', fs });
})().catch(e => console.error(e.message));
