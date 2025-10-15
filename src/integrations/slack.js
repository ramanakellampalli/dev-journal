const fetch = require('node-fetch');
const store = require('../store');
const { toMarkdown } = require('../exporters/markdown');

async function sendSlackSummary(date, webhookUrl) {
  const entries = await store.listEntries({ date });
  if (!entries.length) {
    console.log('No entries to send for', date || 'today');
    return;
  }
  const md = toMarkdown(entries);
  const payload = { text: `Dev Journal — ${date || 'today'}\n\n${md}` };
  const res = await fetch(webhookUrl, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Slack send failed ${res.status}: ${txt}`);
  }
  console.log('Sent summary to Slack');
}

module.exports = { sendSlackSummary };
