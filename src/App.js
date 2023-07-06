import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { useState } from 'react';
import { list, list2 } from './list';

function App() {
	const [selectedFilter, setSelectedFilter] = useState(0);
	return (
		<div className='App'>
			<Header />
			<Filter
				selectedFilter={selectedFilter}
				setSelectedFilter={setSelectedFilter}
			/>
			{selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
		</div>
	);
}

export default App;
