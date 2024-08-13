import NewsWidget from "../components/NewsWidget";
import ProfileWidget from "../components/ProfileWidget";
import WeatherWidget from "../components/WeatherWidget";
import styles from "./CarouselPage.module.css";

export default function CarouselPage() {
  return (
    <div className={styles.container}>
      <div className={styles.profileWidget}><ProfileWidget /></div>
      <div className={styles.weatherWidget}><WeatherWidget /></div>
      <div className={styles.newsWidget}><NewsWidget /></div>
    </div>
  );
}
