import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { useState } from 'react';
import { list, list2 } from './list';
import DisplayNav from './components/DisplayNav';
import ShowMap from './components/Showmap';
import Footer from './components/Footer';

function App() {
	const [selectedFilter, setSelectedFilter] = useState(0);
	return (
		<div className='App'>
			<div className='sticktotop'>
				<Header />

				<Filter
					selectedFilter={selectedFilter}
					setSelectedFilter={setSelectedFilter}
				/>
			</div>
			<DisplayNav />

			{selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
			<ShowMap />
			<Footer />
		</div>
	);
}

export default App;
