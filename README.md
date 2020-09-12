[![npm version](https://badge.fury.io/js/git-branch-picker.svg)](https://badge.fury.io/js/git-branch-picker)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# git-branch-picker 👨‍💻

This tool allows you to pick a local git branch from a list, instead of running `git branch` and then retyping the specific branch identifier with `git checkout`.

License: MIT

## How to use

In your terminal, run:

`git-branch-picker`

Then pick your branch from the list with the arrow keys and press Enter.

## Issues

Please submit them in the Git repository.

## Test

### Unit tests

Run `yarn test`.

### Manual (e2e) tests

Run `yarn build && node dist/index.js`. Make sure to also test with having more than one branch.
