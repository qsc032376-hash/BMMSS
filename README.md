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

## Production configuration

Required environment variables:

- `GEMINI_API_KEY`: Gemini API key for the AI Modeling Lab.
- `EMAIL_USER`: SMTP username. For Gmail, use the Gmail address.
- `EMAIL_PASS`: SMTP password. For Gmail, use an App Password, not the normal account password.
- `EMAIL_FROM`: sender address for website notifications. Usually the same as `EMAIL_USER`.
- `ADMIN_EMAIL`: administrator address that receives application notifications.

Optional environment variables:

- `EMAIL_SERVICE`: Nodemailer service name, defaults to `gmail`.
- `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_SECURE`: custom SMTP configuration if not using a named service.
- `PORT`: server port, defaults to `3000`.
- `DATA_DIR`: folder for application records and maintenance logs, defaults to `./data`.
- `MAINTENANCE_INTERVAL_MS`: backend maintenance interval, defaults to one hour.
- `MAX_APPLICATION_FILE_BYTES`: rotates `applications.jsonl` after this size, defaults to 5 MB.
- `RATE_LIMIT_WINDOW_MS` and `RATE_LIMIT_MAX`: application submission rate-limit controls.

For Render, this repository includes `render.yaml`. Create the web service from the repository, then add the secret values for `GEMINI_API_KEY`, `EMAIL_USER`, `EMAIL_PASS`, and `EMAIL_FROM` in Render's environment settings.

For GitHub, this repository includes a CI workflow at `.github/workflows/ci.yml` that runs type checking and production build on pushes and pull requests.

## Backend features

- `POST /api/apply` validates and stores each application in `data/applications.jsonl`.
- New applications trigger an automatic administrator email through Nodemailer.
- A maintenance job runs on the server interval to clean rate-limit state and rotate oversized application logs.
- `GET /api/health` exposes a lightweight health check and confirms whether email credentials are configured.
