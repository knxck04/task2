import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./About"
import Nav from "./Nav"
import Manga from "./Manga"
import HelloName from './helloname'
import NameList from './NameList'

const RouteSwitch = () => {
	return (
		<Router>
			<Nav />
			<NameList />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/Manga" element={<Manga />} />
				<Route path="/hello/:name" element={<HelloName/>} />
			</Routes>
		</Router>
	)
}
const Home = () => {
	return (
		<div>
			<h1>Home Page</h1>
		</div>
	)
}

export default RouteSwitch