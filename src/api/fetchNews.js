import axios from "axios";

const BASE_URL = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=';
const API_KEY = import.meta.env.VITE_APP_NEWS_API_KEY;

export const fetchNews = async () => {
    try{
        const { data } = await axios.get(`${BASE_URL}${API_KEY}`);
        return data;
    }
    catch(error){
        console.log(error);
    }
}