import dotenv from "dotenv";

dotenv.config();

export const env = {
    port: process.env.PORT || 5000,
    weatherApiKey: process.env.WEATHER_API_KEY || "",
    groqApiKey: process.env.GROQ_API_KEY || "",
};