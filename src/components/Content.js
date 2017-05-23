import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col} from 'react-bootstrap'
import Radium from 'radium' 
const style = {
	all: {
		textAlign: 'left',
		position: 'absolute',
		width: '100%',
		transition: 'all 3s',
	  top: '150px',
		fontSize: '18px',
		lineHeight: '1.4em',
		textShadow: '1px 1px #1B1B1B',
		color: '#DDDDDD',
	},
	left: {
		left: '-250%',
	},
	center: {
		left: '50%',
		marginLeft: '-50%',
	},	
	right: {
		left: '250%',
	},
	HOME: {
		top: '85px',
		fontSize: '28px',
		textAlign: 'center'
	}
}

let Content = ({name, position}) => {
	switch (name) {
		case 'HOME':
			return (
				<Row>
					<Col xs={2} />
					<Col xs={8}>
						<div style={[style.all, style[name], style[position]]}>
							 Welcome to Psyburr	
						</div>
					</Col>
					<Col xs={2} />
				</Row>
			)
		case 'ABOUT':
			return ( 
				<Row>
					<Col xs={2} />
					<Col xs={8}> 
						<div style={[style.all, style[position]]}>
								<p>
									I'm Jeremy, a front-end developer and aspring full-stack engineer. Psyburr is a virtual space for hosting my programming endeavors. It is undergoing constant revision. The source code is on <a href="https://github.com/jeremyburr/psyburr">GitHub</a>
</p>
						</div>
					</Col>
					<Col xs={2} />
				</Row>
			)
		case 'ENDEAVORS':
			return ( 
				<Row>
					<Col xs={2} />
					<Col xs={8}>
						<div style={[style.all, style[position]]}>
							<h3> Pzilogenix </h3>
								<p>
								Pzilogenix is a vector-based 3D modeling framework that draws from mathematical concepts including crystal lattices, snowflakes, L-system fractals, phi, electromagnetic fields, kaleidoscopes, and cellular automatons, as well as psychedelic art.
							  </p>
								<p>Its core library will start with three categories: people, plant life, and architecture.
								</p> 
								<h3> Xelenix </h3>  
							<p>
								Xelenix is an interactive virtual space showcasing models developed with Pzilogenix. A world of fantasy, Xelenix is as much a feat of art as it is programing.  
						</p>
						</div>
					</Col>
					<Col xs={2} />
				</Row>
			)
		case 'CONTACT':
			return (
				<Row>
					<Col xs={2} />
					<Col xs={8}>
						<div style={[style.all, style[position]]}>
						 Please email jeremy@psyburr.com to get in touch.	
						</div>
					</Col>
					<Col xs={2} />
				</Row>
			)
	default:
		return
	}
}

Content = Radium(Content) 

Content.propTypes = {
	name: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired
}

export default Content
