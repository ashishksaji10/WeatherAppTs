import Groq from "groq-sdk";
import { env } from "../config/env.js";

const groq = new Groq({
    apiKey: env.groqApiKey
})

export const generateWeatherSummary = async (prompt: string) => {
    const completion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
            {
                role: "user",
                content: prompt,
            },
        ],
    });
    
    return completion.choices[0].message?.content || "No summary generated";
};