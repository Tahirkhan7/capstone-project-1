import ProfileWidget from "../components/ProfileWidget";
import styles from "./CarouselPage.module.css";

export default function CarouselPage() {
  return (
    <div className={styles.container}>
      <div className={styles.profileWidget}><ProfileWidget /></div>
      <div className={styles.weatherWidget}>weatherwidget</div>
      <div className={styles.newsWidget}>newswidget</div>
    </div>
  );
}
