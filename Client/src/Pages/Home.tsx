import { useState } from 'react'
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';
import WeatherCard from '../components/WeatherCard';
import AISummary from '../components/AISummary';
import { fetchWeather } from '../api/weatherApi';
import type { WeatherData } from '../types/weather';

const Home = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

     const handleSearch = async () => {
        try {
            setLoading(true)
            setError("")

            const response = await fetchWeather(city);
            setWeather(response.data)


        } catch (error) {
            console.error(error);
            setError("Failed to fetch weather");
        } finally {
            setLoading(false);
        }
     };

    return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center p-8 gap-8">
        <h1 className="text-5xl font-bold text-center">
            AI Weather App
        </h1>

        <SearchBar
            city={city}
            setCity={setCity}
            onSearch={handleSearch}
        />

        {loading && <Loader />}

        {error && (
            <div className="text-red-500 text-xl font-semibold">
            {error}
            </div>
        )}

        {weather && (
            <>
            <WeatherCard weather={weather} />
            <AISummary summary={weather.summary} />
            </>
        )}
        </div>
    );
}

export default Home