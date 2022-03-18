#!/usr/bin/env node
import { main } from './main.js';
import { logError } from './logging.js';

main().catch((e) => {
  const message = e.message || 'Oops, something went wrong...';
  logError(message);
});
