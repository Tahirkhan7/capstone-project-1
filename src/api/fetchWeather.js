import axios from "axios";

const BASE_URL = 'https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=';
const API_KEY = import.meta.env.VITE_APP_WEATHER_API_KEY;

export const fetchWeather = async () => {
    try{
        const { data } = await axios.get(`${BASE_URL}${API_KEY}`);
        return data;
    }
    catch(error){
        console.log(error);
    }
}