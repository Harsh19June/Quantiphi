import 'dotenv/config';
import { z } from 'zod';
const schema = z.object({ PORT:z.coerce.number().default(4000), CLIENT_ORIGIN:z.string().default('http://localhost:5173'), MONGODB_URI:z.string().default('mongodb://127.0.0.1:27017'), MONGODB_DB:z.string().default('ai_chat_assistant'), AI_PROVIDER:z.enum(['openai','anthropic']).default('openai'), OPENAI_API_KEY:z.string().optional(), OPENAI_MODEL:z.string().default('gpt-4o-mini'), ANTHROPIC_API_KEY:z.string().optional(), ANTHROPIC_MODEL:z.string().default('claude-3-5-sonnet-latest') });
export const config=schema.parse(process.env);
