import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Row from './components/Row/Row';
import requests from './Utils/Requests';
import Navbar from './components/navbar/Navbar';
function App() {
	return (
		<>
			<div className="app">
				<Navbar />
				<Banner />
				<Row
					title="NETFLIX ORIGINALS"
					fetchUrl={requests.fetchNetflixOriginals}
					isLargeRow
				/>
				<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
				<Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
				<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
				<Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
				<Row title="Action" fetchUrl={requests.fetchActionMovies} />
				<Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
				<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
				<Footer backgroundColor="bg-black" />
			</div>
		</>
	);
}

export default App;
