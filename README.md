# 📝 Dev Journal CLI

A simple CLI tool that prompts you daily to log what you worked on — and lets you export your logs to **Markdown**, **Notion**, or send a **Slack summary**.

---

## 🚀 Getting Started

### 1. Install Node.js dependencies
```bash
npm install commander enquirer lowdb uuid node-fetch
```
> ⚠️ Recommended Node.js version: 24+

### 2. Link the CLI locally
```bash
npm link
```
> ⚠️ On macOS/Linux, if you get EACCES errors, run:
> ```bash
> sudo npm link
> ```
> or configure npm to use a user-owned global directory.

### 3. Log a new entry
```bash
dev-journal log
```
This will prompt you interactively to enter what you worked on, notes, tags, and duration.

### 4. Export logs to Markdown
```bash
dev-journal export md --date 2025-10-14
```
This will generate a Markdown file for the given date.

### 5. Send logs to Slack (optional)
Set your Slack webhook URL:
```bash
export SLACK_WEBHOOK_URL="https://hooks.slack.com/services/XXX/YYY/ZZZ"
```
Then run:
```bash
dev-journal send slack
```
> ⚠️ Slack integration requires the `SLACK_WEBHOOK_URL` environment variable.

---

## 💡 Features
- Daily prompt to log what you worked on  
- Local JSON-based data store at `~/.dev-journal/journal.json`  
- Export logs to Markdown or Notion  
- Send summaries directly to Slack  
> You can inspect your JSON store manually:
```bash
cat ~/.dev-journal/journal.json
```

---

## 🧰 Tech Stack
- Node.js  
- Commander.js (CLI framework)  
- Enquirer (for prompts)  
- node-fetch (for Slack webhooks)  
- LowDB (local JSON storage)  
- UUID (for entry IDs)

---

## 📅 Example Workflow
```bash
# Log your daily work
dev-journal log

# Export yesterday’s log
dev-journal export md --date 2025-10-13

# Share your summary to Slack
dev-journal send slack
```

---

## 🗂 Output Example (Markdown)
```markdown
## 2025-10-14

### Tasks Completed
- Fixed login bug in AuthService
- Updated CI pipeline for test jobs
- Reviewed PR #42

### Notes
- Need to refactor `UserService` tomorrow
```

---

## ⚠️ Troubleshooting
- `Error [ERR_PACKAGE_PATH_NOT_EXPORTED]` → update `src/store.js` to use `Low` + `JSONFile` (LowDB v3+)
- `TypeError: program.version is not a function` → update `bin/cli.js` to `const { Command } = require('commander'); const program = new Command();`
- Permissions errors on `npm link` → use `sudo npm link` or configure npm global directory.
