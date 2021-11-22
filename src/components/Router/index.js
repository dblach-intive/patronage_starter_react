import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from '../../routes/pages/AboutUs';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AboutUs />} />
				{/* Dodaj potrzebne ścieżki aplikacji */}
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
