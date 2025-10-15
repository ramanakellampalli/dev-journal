// src/store.js
const os = require('os');
const path = require('path');
const fs = require('fs');
const { Low } = require('lowdb');
const { JSONFile } = require('lowdb');

const { v4: uuidv4 } = require('uuid');

const baseDir = path.join(os.homedir(), '.dev-journal');
const file = path.join(baseDir, 'journal.json');

async function ensureBase() {
  if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true });
  if (!fs.existsSync(file)) fs.writeFileSync(file, JSON.stringify({ version: 1, entries: [] }, null, 2));
}

async function getDb() {
  await ensureBase();
  const adapter = new JSONFile(file);
  const db = new Low(adapter);
  await db.read();
  db.data ||= { version: 1, entries: [] };
  return db;
}

async function addEntry(entry) {
  const db = await getDb();
  const id = uuidv4();
  const now = new Date();
  const data = Object.assign(
    { id, timestamp: now.toISOString(), date: now.toISOString().slice(0, 10) },
    entry
  );
  db.data.entries.push(data);
  await db.write();
  return data;
}

async function listEntries(filter = {}) {
  const db = await getDb();
  let entries = db.data.entries.slice().sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  if (filter.date) entries = entries.filter(e => e.date === filter.date);
  return entries;
}

module.exports = { addEntry, listEntries };
