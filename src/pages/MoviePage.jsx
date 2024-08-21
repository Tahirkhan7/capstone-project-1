import styles from "./MoviePage.module.css";
import avatar from "../assets/avatar.png";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import GenreRow from "../components/GenreRow";

export default function MoviePage() {
  const { selectedGenres } = useContext(AppContext);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.heading}>Super App</p>
        <img src={avatar} alt="User Avatar" />
      </div>
      <h3>Entertainment according to your choice</h3>
      <div className={styles.movies}>
        {selectedGenres?.map((genre) => (
          <div key={genre.id} className={styles.genre}>
            <h3 className={styles.genreName}>{genre}</h3>
            <GenreRow genre={genre} />
          </div>
        ))}
      </div>
    </div>
  );
}
