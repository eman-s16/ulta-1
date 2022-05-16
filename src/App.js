import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Index from './Components/Index';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Navbar />
					<Routes basename="/ulta-1 ">
						<Route exact path="/ulta-1 " element={<Index />}  />
						<Route exact path="/ulta-1 /Contact" element={<Contact />} />
						
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
