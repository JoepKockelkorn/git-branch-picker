import chalk from 'chalk';

export function logSuccess(message: string) {
  console.log(chalk.green(message));
}

export function log(message: string) {
  console.log(message);
}

export function logError(message: string) {
  console.error(chalk.red(message));
}
