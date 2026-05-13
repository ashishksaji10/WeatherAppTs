import axios from "axios"


export const fetchWeather = async (city: string) => {
    const response = await axios.get(`/api/weather?city=${city}`)
    
    return response.data;
}