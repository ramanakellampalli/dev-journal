#!/usr/bin/env node
const { Command } = require('commander'); // <-- use destructuring
const program = new Command();             // <-- create instance
const pkg = require('../package.json');
const { logFlow, exportMdFlow } = require('../src/index');
const { sendSlackSummary } = require('../src/integrations/slack');

program.version(pkg.version);

program
  .command('log')
  .description('Log what you worked on today')
  .action(async () => {
    await logFlow();
  });

program
  .command('export')
  .description('Export utilities')
  .command('md')
  .description('Export entries as markdown')
  .option('-d, --date <date>', 'Date to export (YYYY-MM-DD)')
  .option('-o, --output <path>', 'Output file')
  .action(async (opts) => {
    await exportMdFlow(opts);
  });

program
  .command('send')
  .description('Send utilities')
  .command('slack')
  .description('Send summary to Slack (webhook)')
  .option('-d, --date <date>', 'Date to send (defaults to today)')
  .action(async (opts) => {
    const CH = process.env.SLACK_WEBHOOK_URL;
    if (!CH) {
      console.error('Set SLACK_WEBHOOK_URL in env to use this command');
      process.exit(1);
    }
    await sendSlackSummary(opts.date || null, CH);
  });

program.parse(process.argv);
