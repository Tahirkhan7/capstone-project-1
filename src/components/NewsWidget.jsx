import { useEffect, useState } from "react";
import { fetchNews } from "../api/fetchNews";
import styles from "./NewsWidget.module.css";
import formatDateAndTime from "../utils/formatDateAndTime";

export default function NewsWidget() {
  const [news, setNews] = useState();

  useEffect(() => {
    fetchNews().then((data) => {
      if (data.status === "ok") {
        const index = Math.floor(Math.random() * data.articles.length);
        setNews(data.articles[index]);
      }
    });
  }, []);

  const renderPublishedAt = (timestamp) => {
    const { date, time } = formatDateAndTime(timestamp);
    return `${date} | ${time}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={news?.urlToImage} />
        <div className={styles.heading}>
          <p>{news?.title}</p>
          <p>{renderPublishedAt(news?.publishedAt)}</p>
        </div>
      </div>
      <div className={styles.body}>
        <p>{news?.content}</p>
      </div>
    </div>
  );
}
