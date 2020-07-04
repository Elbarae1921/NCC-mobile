export type Weather = {
    weatherCode: string;
    avgTemp: string;
    date: string;
}

export type Request = {
    query: string;
    type: string;
}

export type WeatherStatsParams = {
    request: Request;
    weather: Weather[];
}