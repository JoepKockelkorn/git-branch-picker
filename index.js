const main = require('./main');
const { logError } = require('./logging');

main().catch(e => {
  const message = e.message || 'Oops, something went wrong...';
  logError(message);
});
