import type { WeatherData } from "../types/weather";

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard = ({ weather }: WeatherCardProps) => {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl w-full max-w-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4">📍 {weather.city}</h2>

      <div className="space-y-2 text-lg">
        <p>🌡 Temperature: {weather.temperature}°C</p>
        <p>💧 Humidity: {weather.humidity}%</p>
        <p>☁ Condition: {weather.condition}</p>
        <p>💨 Wind Speed: {weather.windSpeed} km/h</p>
      </div>
    </div>
  );
};

export default WeatherCard;