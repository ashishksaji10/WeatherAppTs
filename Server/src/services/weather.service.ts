import axios from "axios";
import { env } from "../config/env.js";

export const getWeatherData = async (city: string) => {
    const response = await axios.get(
        "https://api.weatherapi.com/v1/current.json",
        {
            params: {
                key: env.weatherApiKey,
                q: city
            },
        }
    );
    return response.data
}