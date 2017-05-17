import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium' 

const styles = {
	h3: { 
		all: { 
			position: 'absolute',
			transition: 'all 3s',
			top: '110px',
			textAlign: 'center',
			width: '200px',
			marginLeft: '-100px',
		  fontSize: '28px',
			textShadow: '1px 1px #1B1B1B',
			color: '#DDDDDD'
		},
		left: {
			left: '-250%',
		},
		center: {
			left: '50%',
		},
		right: {
			left: '250%',
		}
	} 
} 
let Title = ({name, position}) => {
		if (name !== 'HOME') {
			return (
				<div>
					<h3 style={[styles.h3.all, styles.h3[position]]}>
						{name} 
					</h3>
				</div>
			)
		}
		return (
			<div>
			</div>
		)
} 

Title.propTypes = {
	name: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
}

Title = Radium(Title) 

export default Title
