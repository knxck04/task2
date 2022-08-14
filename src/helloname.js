import React from 'react'
import { useParams } from 'react-router-dom'

const HelloName = () => {
	const params = useParams()
	return (
		<div>
			Hello {params.name}
		</div>
	)
}

export default HelloName
