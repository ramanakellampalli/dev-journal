const store = require('./store');
const { promptEntry } = require('./prompts');
const { toMarkdown } = require('./exporters/markdown');
const fs = require('fs');
const path = require('path');


async function logFlow() {
  const entry = await promptEntry();
  const saved = await store.addEntry(entry);
  console.log('Saved entry', saved.id);
}


async function exportMdFlow(opts = {}) {
  const date = opts.date;
  const entries = await store.listEntries({ date });
  if (!entries.length) {
    console.log('No entries found for', date || 'all');
    return;
  }
  const md = toMarkdown(entries);
  if (opts.output) {
    fs.writeFileSync(opts.output, md, 'utf8');
    console.log('Wrote', opts.output);
  } else {
    const file = path.join(process.cwd(), `dev-journal-${date || 'all'}.md`);
    fs.writeFileSync(file, md, 'utf8');
    console.log('Wrote', file);
  }
}


module.exports = { logFlow, exportMdFlow };
