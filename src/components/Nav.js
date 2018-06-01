import React from 'react'
import Radium from 'radium'
import NavLink from '../containers/NavLink.js'

const rowStyle = {
  textAlign: 'center',
	'@media (min-width: 320px)' :  {
		marginTop: '30px'
	},
	'@media (min-width: 375px)' :  {
		marginTop: '40px'
	},
	'@media (min-width: 414px)' :  {
		marginTop: '50px'
	},
	'@media (min-width: 768px)' :  {
		marginTop: '75px'
	}, 
}

const middleLink = {
		display: 'inline',
	'@media (min-width: 320px)' :  {
		//border: 'solid 1px red',
		width: '80px',
		paddingLeft: '25px',
		paddingRight: '25px',
	},
	'@media (min-width: 375px)' :  {
		width: '81px',
		paddingLeft: '30px',
		paddingRight: '31px',
	},
	'@media (min-width: 414px)' :  {
		width: '80px',
		paddingLeft: '35px',
		paddingRight: '35px',
	},
  '@media (min-width: 768px)' :  {
		width: '80px',
		paddingLeft: '115px',
		paddingRight: '115px',
	} 
}

let Nav = () =>  (
	<div style={rowStyle}>
			<NavLink target='1'>
				About
			</NavLink>
			<NavLink target='2'>
				<div style={middleLink}>
					Endeavors
				</div>
			</NavLink>
			<NavLink target='3'>
				Contact
			</NavLink>
	</div>
)

Nav = Radium(Nav)

export default Nav
