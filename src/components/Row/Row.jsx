import { useState, useEffect } from 'react';
import axios from '../../Utils/axios';
import styles from '../Row/Row.module.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl, isLargeRow }) => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [trailerUrl, setTrailerUrl] = useState('');

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			setLoading(false);
			return request;
		}

		fetchData();
	}, [fetchUrl]);

	// opts
	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
			autoplay: 1,
		},
	};

	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl('');
		} else {
			movieTrailer(movie?.title || movie?.name || movie?.original_name)
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get('v'));
				})
				.catch((error) => console.log(error));
		}
	};

	return (
		<div className={styles.row}>
			<h2 className="text-2xl font-bold">{title}</h2>
			<div className={styles.row__posters}>
				{movies.map((movie) => (
					<img
						key={movie.id}
						onClick={() => handleClick(movie)}
						className={`${styles.row__poster} ${
							isLargeRow ? styles.row__posterLarge : ''
						}`}
						src={`${base_url}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name || movie.title}
					/>
				))}
			</div>
			<div>{trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}</div>
		</div>
	);
};

export default Row;
