import { useEffect, useState } from "react";
import fetchMovies from "../api/fetchMovies";
import styles from "./GenreRow.module.css";
import { defaultGenres, genreIds } from "../data/genres";

function GenreRow({ genre }) {
	const index = defaultGenres.indexOf(genre);
	const genreID = genreIds[index];
	const [movies, setMovies] = useState([]);
	console.log("genreID: ", genre, genreID);
	useEffect(() => {
		fetchMovies(genreID).then((data) => setMovies(data.results));
	});

	return (
		<div className={styles.container}>
			{movies.slice(0, 4).map((movie) => (
				<div key={movie.id}>
					<img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
				</div>
			))}
		</div>
	);
}

export default GenreRow;