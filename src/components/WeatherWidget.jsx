import { useEffect, useState } from "react";
import { fetchWeather } from "../api/fetchWeather";
import styles from "./WeatherWidget.module.css";
import sunny from "../assets/sunny.png";
import cloudy from "../assets/cloudy.png";
import rain from "../assets/rain.png";
import formatDateAndTime from "../utils/formatDateAndTime";

export default function WeatherWidget() {
  const [weatherData, setWeatherData] = useState();
  const [dateTime, setDateTime] = useState();

  useEffect(() => {
    fetchWeather().then((data) => {
      const responseData = data.timelines.daily[0].values;
      console.log(responseData);
      let condition, thumbnail;
      if (responseData.cloudCoverAvg < 30) {
        thumbnail = sunny;
        condition = "Sunny";
      } else if (
        responseData.cloudCoverAvg >= 30 &&
        responseData.cloudCoverAvg < 70
      ) {
        thumbnail = cloudy;
        condition = "Cloudy";
      } else if (responseData.cloudCoverAvg > 70) {
        thumbnail = rain;
        condition = "Heavy Rain";
      }
      setWeatherData({
        temperature: responseData.temperatureAvg,
        condition: condition,
        thumbnail: thumbnail,
        pressure: responseData.pressureSurfaceLevelAvg,
        wind: responseData.windSpeedAvg,
      });
        const { date, time } = formatDateAndTime();
		setDateTime({ date, time });
        console.log(weatherData.temperature);
    });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
				{dateTime && (
					<>
						<div className={styles.date}>{dateTime.date}</div>
						<div className={styles.time}>{dateTime.time}</div>
					</>
				)}
			</div>
      <div className={styles.content}>
      {weatherData ? (
					<>
						<img
							className={styles.thumbnail}
							src={weatherData.thumbnail}
							alt="weather"
						/>
						<div className={styles.temperature}>
							{weatherData.temperature}°C
						</div>
						<div className={styles.condition}>{weatherData.condition}</div>
						<div className={styles.details}>
							<div className={styles.detail}>
								<span>Pressure</span>
								<span>{weatherData.pressure}mb</span>
							</div>
							<div className={styles.detail}>
								<span>Wind</span>
								<span>{weatherData.wind}kph</span>
							</div>
							<div className={styles.detail}>
								<span>Humidity</span>
								<span>{weatherData.humidity}%</span>
							</div>
						</div>
					</>
				) : (
					<div>Loading...</div>
				)}
      </div>
    </div>
  );
}
