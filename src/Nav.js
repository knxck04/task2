import React from 'react'
import './App.css'
import { Link, Routes } from 'react-router-dom'

function Nav() {
	return (
		<nav>
			<h3>Logo</h3>
			<ul className="nav-links">
				<Link to='/about'>
					<li>About</li>
				</Link>
				<Link to='/manga'>
					<li>Manga</li>
				</Link>
			</ul>

		</nav>
	)
}

export default Nav
