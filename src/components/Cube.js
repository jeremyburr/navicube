import React from 'react'
import Radium from 'radium' 

const rotateCube = Radium.keyframes({
	'12%': {transform: 'rotateX(90deg) rotateY(45deg)'},
	'25%': {transform: 'rotateX(180deg) rotateY(90deg)'},
	'37%': {transform: 'rotateX(270deg) rotateY(135deg)'},
	'50%': {transform: 'rotateX(360deg) rotateY(180deg)'},
	'62%': {transform: 'rotateX(450deg) rotateY(225deg)'},
	'75%': {transform: 'rotateX(540deg) rotateY(270deg)'},
	'87%': {transform: 'rotateX(630deg) rotateY(315deg)'},
	'100%':{transform: 'rotateX(720deg) rotateY(360deg)'}
}, 'rotateCube');

const style = {
	cube: {
		position: 'absolute',
		transformStyle: 'preserve-3d', animation: 'x 20s infinite linear', 
		animationName: rotateCube,
	},
	face: {
		display: 'block',
		position: 'absolute',
		opacity: '1', 
		transition: 'all',
},
	front: { background: '#8276C6',/*red*/ },
	bottom: { background: '#00C8FF',/*teal*/ },
	top: { background: '#00EB8E',/*turqouise*/ },
	right: { background: '#EB0081',/*hot pink*/ },
	back: { background: '#336DFF',/*blue*/ },
	left: { background: '#C6778A',/*pink*/ },
};
const transitions = {
	cube: {
		HOME: {
			width: '150px',
			height: '150px',
			marginLeft: '-75px',
			marginTop: '-75px',
			top: '390px',		
			left: '50%', 
			transition: 'all 20s',
			transformOrigin: '75px 75px',
		},
		ABOUT: {
			width: '25px',
			height: '25px',
			marginLeft: '-12.5px',
			top: '53px',
			left: '19.5%', 
			transition: 'all 2s',
			transformOrigin: '12.5px 12.5px',
		},
		ENDEAVORS: {
			width: '25px',
			height: '25px',
			marginLeft: '-12.5px',
			top: '53px',
			left: '50%', 
			transition: 'all 2s',
			transformOrigin: '12.5px 12.5px',
		},
		CONTACT: {
			width: '25px',
			height: '25px',
			marginLeft: '-12.5px',
			top: '53px',
			left: '81%', 
			transition: 'all 2s',
			transformOrigin: '12.5px 12.5px',
		},
	},
	face: {
			HOME: {
				width: '150px',
				height: '150px',
			},
			ABOUT: {
				width: '25px',
				height: '25px',
				transition: 'all 2s',
			},
			ENDEAVORS:	{
				width: '25px',
				height: '25px',
				transition: 'all 2s',
			}, 
			CONTACT: {
				width: '25px',
				height: '25px',
				transition: 'all 2s',
			},
	},
	front: {	
		HOME: { transform: 'rotateX(270deg) rotateY(180deg) rotateZ(0deg) translateZ(75px)'},
		ABOUT: { transform: 'rotateX(270deg) rotateY(180deg) rotateZ(0deg) translateZ(12.5px)'},
		ENDEAVORS: { transform: 'rotateX(270deg) rotateY(180deg) rotateZ(0deg) translateZ(12.5px)'},
		CONTACT: { transform: 'rotateX(270deg) rotateY(180deg) rotateZ(0deg) translateZ(12.5px)'}
	},
	back: {	
		HOME: { transform: 'rotateX(0deg) rotateY(180deg) rotateZ(0deg) translateZ(75px)'},
		ABOUT: { transform: 'rotateX(0deg) rotateY(180deg) rotateZ(0deg) translateZ(12.5px)'},
		ENDEAVORS: { transform: 'rotateX(0deg) rotateY(180deg) rotateZ(0deg) translateZ(12.5px)'},
		CONTACT: { transform: 'rotateX(0deg) rotateY(180deg) rotateZ(0deg) translateZ(12.5px)'}
	},
	left: {	
		HOME: { transform: 'rotateX(0deg) rotateY(270deg) rotateZ(0deg) translateZ(75px)'},
		ABOUT: { transform: 'rotateX(0deg) rotateY(270deg) rotateZ(0deg) translateZ(12.5px)'},
		ENDEAVORS: { transform: 'rotateX(0deg) rotateY(270deg) rotateZ(0deg) translateZ(12.5px)'},
		CONTACT: { transform: 'rotateX(0deg) rotateY(270deg) rotateZ(0deg) translateZ(12.5px)'}
	},
	right: {	
		HOME: { transform: 'rotateX(0deg) rotateY(90deg) rotateZ(0deg) translateZ(75px)'},
		ABOUT: { transform: 'rotateX(0deg) rotateY(90deg) rotateZ(0deg) translateZ(12.5px)'},
		ENDEAVORS: { transform: 'rotateX(0deg) rotateY(90deg) rotateZ(0deg) translateZ(12.5px)'},
		CONTACT: { transform: 'rotateX(0deg) rotateY(90deg) rotateZ(0deg) translateZ(12.5px)'}
	},
	top: {	
		HOME: { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(75px)'},
		ABOUT: { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(12.5px)'},
		ENDEAVORS: { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(12.5px)'},
		CONTACT: { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(12.5px)'}
	},
	bottom: {	
		HOME: { transform: 'rotateX(270deg) rotateY(0deg) rotateZ(0deg) translateZ(75px)'},
		ABOUT: { transform: 'rotateX(270deg) rotateY(0deg) rotateZ(0deg) translateZ(12.5px)'},
		ENDEAVORS: { transform: 'rotateX(270deg) rotateY(0deg) rotateZ(0deg) translateZ(12.5px)'},
		CONTACT: { transform: 'rotateX(270deg) rotateY(0deg) rotateZ(0deg) translateZ(12.5px)'}
	},
};

// USE LESS-STYLE INHERITANCE FOR CUBESTYLE.FACE with Radium perhaps?

let Cube = ( { current } ) => (
	<div>
			<div style={[style.cube, transitions.cube[current]]}>
				<div style={[style.front, style.face, transitions.face[current], transitions.front[current]]}></div>
				<div style={[style.back, style.face, transitions.face[current], transitions.back[current]]}></div>
				<div style={[style.left, style.face, transitions.face[current], transitions.left[current]]}></div>
				<div style={[style.right, style.face, transitions.face[current], transitions.right[current]]}></div>
				<div style={[style.top, style.face, transitions.face[current], transitions.top[current]]}></div>
				<div style={[style.bottom, style.face, transitions.face[current], transitions.bottom[current]]}></div>
			</div>
	</div> 
)
Cube = Radium(Cube); 

export default Cube
