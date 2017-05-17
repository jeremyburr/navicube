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
									I am Jeremy, a front-end developer and aspring full-stack engineer. This is the humble beginning of Psyburr, a virtual space for hosting my programming endeavors. It is undergoing constant revision. The source code is on Github.
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
							<h3> Vulkern </h3>
								<p>
								Vulkern is a physical command interface system. It allows a user to operate a computer with body movement by creating a real-time kinesthetic feedback loop between the user and computer. It includes an input device suit, microcontrollers, drivers, command-line tools, GUI application, and physical command language.
								</p> 
								<p>
								Input Device: A number of approaches - both wired and wireless - are being considered. Use of gyroscopes, accelerometers, and magnets will be explored, as will any applicable developments the emerging area of virtual reality suits.
								</p> 
							<h3> Kidelix </h3>
								<p>
								Kidelix is an intuitive vector-based 3D modeling framework. It integrates a set of mathematical principles, including crystal lattice systems, L-system fractals, phi, electromagnetic fields, kaleidoscopes, and cellular automatons.
							  </p>
								<p>Its core library will start with three categories: human anatomy, plant life, and architecture.	Interactive mode allows kinesthetic control with Vulkern.
								</p> 
							<h3> Veagrow </h3>
							<p>
								Veagrow is an automated plant growth system. Its interchangeable units of tube and wiring mappings allow for easy scaling and customization. Solar powered options will be explored. 	
							</p>
							<h3> Xelenix </h3>  
							<p>
								Xelenix is an interactive virtual space showcasing models developed with Kidelix. A world of fantasy, Xelenix is as much a feat of art as it is programing
						</p>
							<h3> Psilogenix </h3>
							<p>
							Psilogenix is an experimental visual pattern generator developed with Kidelix. It draws influence heavily from psychedic art.
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
