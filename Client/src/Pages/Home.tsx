import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';
import WeatherCard from '../components/WeatherCard';
import { fetchWeather } from '../api/weatherApi';
import type { WeatherData } from '../types/weather';
import { CloudRain, MapPinOff } from 'lucide-react';

const Home = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

     const handleSearch = async () => {
        if (!city.trim()) return;
        try {
            setLoading(true);
            setError("");

            const response = await fetchWeather(city);
            setWeather(response.data);

        } catch (error) {
            console.error(error);
            setWeather(null);
            setError("Failed to fetch weather. Please try another city.");
        } finally {
            setLoading(false);
        }
     };

    return (
        <div className="min-h-screen flex flex-col items-center p-6 md:p-12 lg:p-24 w-full max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-10 mt-8 md:mt-0">
                <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
                    <CloudRain size={36} className="text-blue-300" />
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Neo<span className="font-light text-blue-300">Weather</span>
                </h1>
            </div>

            <div className="w-full max-w-2xl mb-12">
                <SearchBar
                    city={city}
                    setCity={setCity}
                    onSearch={handleSearch}
                />
            </div>

            {loading && <Loader />}

            {error && !loading && (
                <div className="w-full flex justify-center animate-fade-in-up mt-4">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl w-full max-w-2xl text-center shadow-2xl relative overflow-hidden group hover:bg-white/15 transition-all duration-300">
                        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-400 to-indigo-400"></div>
                        <div className="flex justify-center mb-6">
                            <div className="p-5 bg-white/5 border border-white/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                                <MapPinOff size={48} className="text-blue-300" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-3">City Not Found</h2>
                        <p className="text-white/80 text-lg font-light leading-relaxed">
                            We couldn't find any weather data for <span className="font-semibold text-white">"{city}"</span>. Please check for another location.
                        </p>
                    </div>
                </div>
            )}

            {weather && !loading && !error && (
                <div className="w-full flex justify-center animate-fade-in-up">
                    <div className="w-full max-w-2xl">
                        <WeatherCard weather={weather} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;