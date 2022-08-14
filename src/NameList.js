import React from 'react'
import { Link } from 'react-router-dom'

const NameList = () => {
	let listOfNames = ["Andrei", "Jacques", "Johny", "Alex", "Tom"]

	return (
		<div>
			<ul>
				{listOfNames.map(n => <Link to={`/hello/${n}`}>
					<li>{n}</li>
					</Link>
				)}
			</ul>
		</div>
	)
}

export default NameList
