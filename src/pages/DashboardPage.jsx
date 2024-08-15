import NewsWidget from '../components/NewsWidget';
import ProfileWidget from '../components/ProfileWidget';
import TimerWidget from '../components/TimerWidget';
import WeatherWidget from '../components/WeatherWidget';
import styles from './DashboardPage.module.css';

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      <div className={styles.profileWidget}><ProfileWidget /></div>
      <div className={styles.weatherWidget}><WeatherWidget /></div>
      <div className={styles.notesWidget}>notes</div>
      <div className={styles.timerWidget}><TimerWidget /></div>
      <div className={styles.newsWidget}><NewsWidget /></div>
    </div>
  );
}
