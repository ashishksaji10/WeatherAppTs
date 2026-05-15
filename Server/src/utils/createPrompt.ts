import { PromptProps } from "../types/weather.types.js";

export const createPrompt = ({
    city,
    temperature,
    humidity,
    condition,
    windSpeed,
}:PromptProps) => {
    return `
        You are a friendly  weather assistant but act as a warm, caring friend who happens to know a lot about weather.

        Given today's conditions in 
        ${city} — 
        ${temperature}°C, 
        ${humidity}% humidity, 
        ${condition}, and winds at 
        ${windSpeed} km/h — 
        write a short, friendly weather update in under 50 words. 
        Focus on how the weather *feels* and what to expect — don't just repeat the numbers.

        Make it feel like a text from a friend, not a forecast. 
    `
};