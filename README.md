# AI Chat Assistant

Full-stack streaming chat assistant built for the Quantiphi/NIT Surat requirements.

## Features
- Streaming chat responses with OpenAI or Anthropic provider abstraction.
- MongoDB persistence for threads, messages, tone, timestamps, and usage metadata.
- Professional, Casual, and Concise tone system modifiers enforced server-side.
- Thread history sidebar, search, message regeneration, and Markdown rendering.
- Export conversations as JSON or Markdown.

## Run
1. Copy `backend/.env.example` to `backend/.env` and configure `MONGODB_URI` plus one provider key.
2. Run `npm install` and `npm run dev` from the repository root.
3. Backend defaults to `http://localhost:4000`, frontend to `http://localhost:5173`.

Use `npm test` for backend tests and a frontend production build.
