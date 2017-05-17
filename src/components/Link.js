import React from 'react'
import PropTypes from 'prop-types'

const navLinkStyle = {
	color: 'white',
	fontSize: '1.25em',
	textShadow: '1px 1px #1B1B1B'
}
const Link = ({ active, children, onClick }) => {
	if (active) {
		return <span style={navLinkStyle}>{children}</span>
	}

	return (
		<a style={navLinkStyle} href="#"
			onClick={e => {
				e.preventDefault()
					onClick()
			}}
		>
			{children}
		</a>
	)
}

Link.propTypes = { 
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
}

export default Link
