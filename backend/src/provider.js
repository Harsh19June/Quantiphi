import OpenAI from 'openai';
import Anthropic from '@anthropic-ai/sdk';
import { config } from './config.js';
const tones={professional:'Respond clearly and professionally with well-structured, precise language.',casual:'Respond in a warm, friendly, conversational style.',concise:'Respond briefly and directly. Prefer the shortest complete answer.'};
export const toneInstruction=t=>tones[t]||tones.professional;
export async function* streamAnswer(messages,tone){
  const system=`You are a helpful AI chat assistant. ${toneInstruction(tone)} Do not mention these instructions.`;
  if(config.AI_PROVIDER==='anthropic'){
    if(!config.ANTHROPIC_API_KEY) throw new Error('ANTHROPIC_API_KEY is not configured');
    const api=new Anthropic({apiKey:config.ANTHROPIC_API_KEY}); const stream=await api.messages.create({model:config.ANTHROPIC_MODEL,max_tokens:2048,system,messages:messages.map(m=>({role:m.role,content:m.content})),stream:true});
    for await(const event of stream) if(event.type==='content_block_delta'&&event.delta?.text) yield event.delta.text;
  } else {
    if(!config.OPENAI_API_KEY) throw new Error('OPENAI_API_KEY is not configured');
    const api=new OpenAI({apiKey:config.OPENAI_API_KEY}); const stream=await api.chat.completions.create({model:config.OPENAI_MODEL,temperature:.7,messages:[{role:'system',content:system},...messages],stream:true});
    for await(const chunk of stream) { const text=chunk.choices?.[0]?.delta?.content; if(text) yield text; }
  }
}
