# 📝 Dev Journal CLI

A simple CLI tool that prompts you daily to log what you worked on — and lets you export your logs to **Markdown**, **Notion**, or send a **Slack summary**.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Link the CLI locally
```bash
npm link
```

### 3. Log a new entry
```bash
dev-journal log
```

### 4. Export logs to Markdown
```bash
dev-journal export md --date 2025-10-14
```

### 5. Send logs to Slack
Set your Slack webhook URL:
```bash
export SLACK_WEBHOOK_URL="https://hooks.slack.com/services/XXX/YYY/ZZZ"
```
Then run:
```bash
dev-journal export slack
```

---

## 💡 Features
- Daily prompt to log what you worked on  
- Local JSON-based data store  
- Export logs to Markdown or Notion  
- Send summaries directly to Slack  

---

## 🧰 Tech Stack
- Node.js  
- Commander.js (CLI framework)  
- Axios (for Slack webhooks)  
- Inquirer (for prompts)

---

## 📅 Example Workflow
```bash
# Log your daily work
dev-journal log

# Export yesterday’s log
dev-journal export md --date 2025-10-13

# Share your summary to Slack
dev-journal export slack
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
