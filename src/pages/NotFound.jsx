import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>404</h1>
        <p className={styles.text}>opps not found!</p>
        <p className={styles.subtext}>
          Sorry the page you are looking for does not exists!
        </p>
        <Link to="/" className={styles.link}>
          Go To Dashboard
        </Link>
      </div>
    </>
  );
}
