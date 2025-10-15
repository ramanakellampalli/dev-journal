function toMarkdown(entries) {
  const parts = entries.map(e => {
    const lines = [];
    lines.push(`## ${e.date} — ${e.what}`);
    if (e.why) lines.push(`**Why:** ${e.why}`);
    if (e.notes) lines.push(`**Notes:**\n${e.notes}`);
    if (e.tags && e.tags.length) lines.push(`**Tags:** ${e.tags.join(', ')}`);
    if (e.duration_minutes) lines.push(`**Duration:** ${e.duration_minutes} minutes`);
    lines.push(`_id: ${e.id} | saved: ${e.timestamp}_`);
    return lines.join('\n\n');
  });
  return parts.join('\n\n---\n\n');
}

module.exports = { toMarkdown };
