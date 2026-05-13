import { Request, Response } from "express";
import { getWeatherData } from "../services/weather.service.js";
import { createPrompt } from "../utils/createPrompt.js";
import { generateWeatherSummary } from "../services/groq.service.js";

export const getWeather = async(req:Request, res:Response) => {
    try {
        const city = req.query.city as string

        if(!city){
            return res.status(400).json({
                success:false,
                message:"City is required"
            })
        }

        const weatherData = await getWeatherData(city);
        console.log(weatherData,'Raw Data Response');
        

        const formattedData = {
            city: weatherData.location.name,
            temperature: weatherData.current.temp_c,
            humidity: weatherData.current.humidity,
            condition: weatherData.current.condition.text,
            windSpeed: weatherData.current.wind_kph,
        }

        const prompt = createPrompt(formattedData);
        const summary = await generateWeatherSummary(prompt);

        return res.status(200).json({
            success: true,
            data:{
                ...formattedData,
                summary
            }
        })
        

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch weather",
        });
    }
}