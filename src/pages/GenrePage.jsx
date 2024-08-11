import { useContext, useEffect, useState } from "react";
import styles from "./GenrePage.module.css";
import { AppContext } from "../context/AppContext";
import { defaultGenres } from "../data/genres";
import { useNavigate } from "react-router-dom";

export default function GenrePage() {
  const { selectedGenres, setSelectedGenres } = useContext(AppContext);
  const [error, setError] = useState();
  const navigate = useNavigate();

  useEffect(()=>{
    if(selectedGenres.length >=3) setError(false);
  },[selectedGenres]);

  const handleSelectedGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(
        selectedGenres.filter((selectedGenre) => selectedGenre !== genre)
      );
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const handleNext = () => {
    if(selectedGenres.length < 3) setError(true);
    else
    navigate('/carousel');
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.header}>Super app</h3>
        <h2 className={styles.subheading}>
          Choose your entertainment category
        </h2>
        <div className={styles.selectedGenres}>
          {selectedGenres.map((genre) => (
            <div
              key={genre}
              className={styles.selectedGenre}
              onClick={() => {
                handleSelectedGenre(genre);
              }}
            >
              {genre}
            </div>
          ))}
        </div>
        {error && <p className={styles.error}>Minimum 3 category required</p>}
      </div>

      <div className={styles.right}>
        <div className={styles.genres}>
          {defaultGenres.map((genre, index) => (
            <div
              key={index}
              className={styles.genre}
              onClick={() => {
                handleSelectedGenre(genre);
              }}
            >
              {genre}
            </div>
          ))}
        </div>
        <button onClick={handleNext}>Next Page</button>
      </div>
    </div>
  );
}
