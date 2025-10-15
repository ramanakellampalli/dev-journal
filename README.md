# dev-journal
CLI that prompts daily to log what you worked on; exports to Markdown/Notion or sends Slack summary.

# Dev Journal CLI — Starter


1. Install deps:


npm install


2. Link CLI (local):


npm link


3. Log an entry:


dev-journal log


4. Export to markdown:


dev-journal export md --date 2025-10-14


5. Send to Slack (set env):


export SLACK_WEBHOOK_URL="https://hooks.slack.com/services/XXX/YYY/ZZZ"