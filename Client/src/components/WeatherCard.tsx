import type { WeatherData } from "../types/weather";
import { Cloud, Droplets, Wind } from 'lucide-react';
import AISummary from "./AISummary";

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard = ({ weather }: WeatherCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl w-full shadow-2xl hover:bg-white/15 transition-all duration-300">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold tracking-tight mb-2">{weather.city}</h2>
        <div className="text-6xl font-extrabold bg-linear-to-r from-blue-300 to-white text-transparent bg-clip-text">
          {weather.temperature}°C
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
          <Cloud className="text-blue-300 shrink-0" size={24} />
          <div className="overflow-hidden">
            <p className="text-xs text-white/60 uppercase font-semibold tracking-wider truncate">Condition</p>
            <p className="text-lg font-medium truncate" title={weather.condition}>{weather.condition}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
          <Droplets className="text-blue-300 shrink-0" size={24} />
          <div>
            <p className="text-xs text-white/60 uppercase font-semibold tracking-wider">Humidity</p>
            <p className="text-lg font-medium">{weather.humidity}%</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 col-span-2">
          <Wind className="text-blue-300 shrink-0" size={24} />
          <div>
            <p className="text-xs text-white/60 uppercase font-semibold tracking-wider">Wind Speed</p>
            <p className="text-lg font-medium">{weather.windSpeed} km/h</p>
          </div>
        </div>
      </div>

      <AISummary summary={weather.summary} />
    </div>
  );
};

export default WeatherCard;