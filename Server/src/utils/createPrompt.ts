import { PromptProps } from "../types/weather.types.js";

export const createPrompt = ({
    city,
    temperature,
    humidity,
    condition,
    windSpeed,
}:PromptProps) => {
    return `
        You are a weather assistant.

        Summarize today's weather in a friendly short paragraph.

        City: ${city}
        Temperature: ${temperature}°C
        Humidity: ${humidity}%
        Condition: ${condition}
        Wind Speed: ${windSpeed} km/h

        Keep it under 50 words.
    `
};