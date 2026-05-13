export interface WeatherResponse {
    city: string,
    temperature: string,
    humidity:string,
    condition: string,
    windSpeed:string,
    summary:string
}

export interface PromptProps {
  city: string;
  temperature: number;
  humidity: number;
  condition: string;
  windSpeed: number;
}
