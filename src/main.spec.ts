import { main } from './main';
import chalk from 'chalk';

jest.mock('simple-git/promise', () => {
  return jest.fn();
});

import simplegit from 'simple-git/promise';

jest.mock('inquirer', () => {
  return {
    prompt: jest.fn(() => Promise.resolve({ branch: '1' })),
  };
});

const consoleSpy = jest.spyOn(console, 'log');
consoleSpy.mockImplementation(() => {});

describe('main', () => {
  beforeEach(() => {
    consoleSpy.mockReset();
  });

  it('should work without any other branches', async () => {
    mockSimpleGit();

    await main();

    expect(consoleSpy).toBeCalledTimes(1);
    expect(consoleSpy).toBeCalledWith('Your current branch is the only branch.');
  });

  it('should work with one other branch', async () => {
    mockSimpleGit(['1']);

    await main();

    expect(consoleSpy).toBeCalledTimes(1);
    expect(consoleSpy).toBeCalledWith(chalk.green('Successfully checked out 1'));
  });

  it('should work with more than one branch', async () => {
    mockSimpleGit(['1', '2']);

    await main();

    expect(consoleSpy).toBeCalledTimes(1);
    expect(consoleSpy).toBeCalledWith(chalk.green('Successfully checked out 1'));
  });

  it('should log an error when thrown', async (done) => {
    mockSimpleGit(
      ['1'],
      jest.fn(() => {
        throw new Error('Something went wrong');
      }),
    );

    try {
      await main();
    } catch (error) {
      expect(error.message).toEqual('Something went wrong');
      done();
    }
  });
});

function mockSimpleGit(extraBranches: string[] = [], checkoutMock = jest.fn()) {
  ((simplegit as unknown) as jest.Mock<any, any>).mockImplementationOnce(() => ({
    branchLocal: () => Promise.resolve({ all: ['master', ...extraBranches], current: 'master' }),
    checkout: checkoutMock,
  }));
}
