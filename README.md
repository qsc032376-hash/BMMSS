<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/fac54e75-80ab-4b18-b2ca-ae2394734eb5

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the environment variables in `.env.local`:
   - `GEMINI_API_KEY`: Gemini API key for the AI Modeling Lab
   - `EMAIL_USER`: SMTP account username
   - `EMAIL_PASS`: SMTP app password or SMTP password
   - `ADMIN_EMAIL`: administrator email that receives new application notices
3. Run the app:
   `npm run dev`

## Backend features

- `POST /api/apply` validates and stores each application in `data/applications.jsonl`.
- New applications trigger an automatic administrator email through Nodemailer.
- A maintenance job runs on the server interval to clean rate-limit state and rotate oversized application logs.
- `GET /api/health` exposes a lightweight health check for deployment monitoring.
