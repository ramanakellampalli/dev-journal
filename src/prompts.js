const { prompt } = require('enquirer');


async function promptEntry() {
  const resp = await prompt([
    { type: 'input', name: 'what', message: 'What did you work on?' },
    { type: 'input', name: 'why', message: 'Why / context (optional)', initial: '' },
    { type: 'input', name: 'notes', message: 'Notes (optional)', initial: '' },
    { type: 'input', name: 'tags', message: 'Tags (comma separated)', initial: '' },
    { type: 'input', name: 'duration_minutes', message: 'Duration minutes (optional)', initial: '' }
  ]);


  return {
    what: resp.what.trim(),
    why: resp.why.trim() || null,
    notes: resp.notes.trim() || null,
    tags: resp.tags ? resp.tags.split(',').map(s => s.trim()).filter(Boolean) : [],
    duration_minutes: resp.duration_minutes ? Number(resp.duration_minutes) : null
  };
}


module.exports = { promptEntry };
