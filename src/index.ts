#!/usr/bin/env node
import { main } from './main';
import { logError } from './logging';

main().catch((e) => {
  const message = e.message || 'Oops, something went wrong...';
  logError(message);
});
