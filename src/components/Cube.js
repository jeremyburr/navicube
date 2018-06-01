import React, {Component} from 'react'
import Radium from 'radium' 

const rotateCube = Radium.keyframes({
  '12%': {transform: 'rotateX(90deg) rotateY(45deg)'},
  '25%': {transform: 'rotateX(180deg) rotateY(90deg)'},
  '37%': {transform: 'rotateX(270deg) rotateY(135deg)'},
  '50%': {transform: 'rotateX(355deg) rotateY(180deg)'},
  '62%': {transform: 'rotateX(450deg) rotateY(225deg)'},
  '75%': {transform: 'rotateX(540deg) rotateY(270deg)'},
  '87%': {transform: 'rotateX(550deg) rotateY(315deg)'},
  '100%':{transform: 'rotateX(720deg) rotateY(355deg)'}
}, 'rotateCube');

const style = {
  cube: {
    position: 'absolute',
		zIndex: '1',
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
			top: '50%',   
      left: '50%', 
      transition: 'all 2s', 
    },
    ABOUT: {
      width: '25px',
      height: '25px',
      marginLeft: '-12.5px',
      top: '53px',
      left: '16%', 
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
      left: '84%', 
      transition: 'all 2s',
      transformOrigin: '12.5px 12.5px',
    },
  },
  face: {
      HOME: { },
      ABOUT: {
        width: '25px',
        height: '25px',
        transition: 'all 2s',
      },
      ENDEAVORS:  {
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
		HOME: {},
    ABOUT: { transform: 'rotateX(270deg) rotateY(180deg) rotateZ(0deg) translateZ(12.5px)'},
    ENDEAVORS: { transform: 'rotateX(270deg) rotateY(180deg) rotateZ(0deg) translateZ(12.5px)'},
    CONTACT: { transform: 'rotateX(270deg) rotateY(180deg) rotateZ(0deg) translateZ(12.5px)'}
  },
  back: {  
		HOME: {},
		ABOUT: { transform: 'rotateX(0deg) rotateY(180deg) rotateZ(0deg) translateZ(12.5px)'},
    ENDEAVORS: { transform: 'rotateX(0deg) rotateY(180deg) rotateZ(0deg) translateZ(12.5px)'},
    CONTACT: { transform: 'rotateX(0deg) rotateY(180deg) rotateZ(0deg) translateZ(12.5px)'}
  },
  left: {  
		HOME: {},
    ABOUT: { transform: 'rotateX(0deg) rotateY(270deg) rotateZ(0deg) translateZ(12.5px)'},
    ENDEAVORS: { transform: 'rotateX(0deg) rotateY(270deg) rotateZ(0deg) translateZ(12.5px)'},
    CONTACT: { transform: 'rotateX(0deg) rotateY(270deg) rotateZ(0deg) translateZ(12.5px)'}
  },
  right: {  
		HOME: {},
		ABOUT: { transform: 'rotateX(0deg) rotateY(90deg) rotateZ(0deg) translateZ(12.5px)'},
    ENDEAVORS: { transform: 'rotateX(0deg) rotateY(90deg) rotateZ(0deg) translateZ(12.5px)'},
    CONTACT: { transform: 'rotateX(1deg) rotateY(90deg) rotateZ(0deg) translateZ(12.5px)'}
  },
  top: {  
		HOME: {},
		ABOUT: { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(12.5px)'},
    ENDEAVORS: { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(12.5px)'},
    CONTACT: { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(12.5px)'}
  },
  bottom: { 
		HOME: {},
		ABOUT: { transform: 'rotateX(270deg) rotateY(0deg) rotateZ(0deg) translateZ(12.5px)'},
    ENDEAVORS: { transform: 'rotateX(270deg) rotateY(0deg) rotateZ(0deg) translateZ(12.5px)'},
    CONTACT: { transform: 'rotateX(270deg) rotateY(0deg) rotateZ(0deg) translateZ(12.5px)'}
  },
};


class Cube extends Component { 
	constructor (props) {
			super(props);
	} 
	
		 setCubeSize() {
			let cubeSize = document.documentElement.clientHeight / 9;
			let halfCubeSize = cubeSize / 2;
			transitions.face.HOME.width = cubeSize + 'px';
			transitions.face.HOME.height = cubeSize + 'px'; 
			transitions.cube.HOME.width = cubeSize + 'px';
			transitions.cube.HOME.height = cubeSize + 'px'; 
			transitions.cube.HOME.marginLeft = '-'+halfCubeSize+'px';
			transitions.cube.HOME.marginTop = '-'+halfCubeSize+'px';
			transitions.cube.HOME.transformOrigin = halfCubeSize+'px'+halfCubeSize+'px'; 
			transitions.front.HOME.transform = 'rotateX(270deg) rotateY(180deg) rotateZ(0deg) translateZ(-'+halfCubeSize+'px)';
			transitions.back.HOME.transform = 'rotateX(0deg) rotateY(180deg) rotateZ(0deg) translateZ(-'+halfCubeSize+'px)';
			transitions.left.HOME.transform = 'rotateX(0deg) rotateY(270deg) rotateZ(0deg) translateZ(-'+halfCubeSize+'px)';
			transitions.right.HOME.transform = 'rotateX(0deg) rotateY(90deg) rotateZ(0deg) translateZ(-'+halfCubeSize+'px)';
			transitions.top.HOME.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(-'+halfCubeSize+'px)';
			transitions.bottom.HOME.transform = 'rotateX(270deg) rotateY(0deg) rotateZ(0deg) translateZ(-'+halfCubeSize+'px)';
			console.log('cube updated');
 		 }; 


			componentWillMount() { 
			  this.setCubeSize();
				console.log(this.props);
			}

			componentDidMount() { 
			let cubeHeight = document.documentElement.clientHeight;
			  window.addEventListener("resize", this.setCubeSize);
				window.addEventListener("resize", this.props.resizeCube);
			  //window.addEventListener("resize", () => { resizeCube(cubeHeight); });
			}

	render() {
		return ( 
			<div>
					<div style={[style.cube, transitions.cube[this.props.current]]}>
						<div style={[style.front, style.face, transitions.face[this.props.current], transitions.front[this.props.current]]}></div>
						<div style={[style.back, style.face, transitions.face[this.props.current], transitions.back[this.props.current]]}></div>
						<div style={[style.left, style.face, transitions.face[this.props.current], transitions.left[this.props.current]]}></div>
						<div style={[style.right, style.face, transitions.face[this.props.current], transitions.right[this.props.current]]}></div>
						<div style={[style.top, style.face, transitions.face[this.props.current], transitions.top[this.props.current]]}></div>
						<div style={[style.bottom, style.face, transitions.face[this.props.current], transitions.bottom[this.props.current]]}></div>
					</div>
				</div> 
		); 
	} 

}
	
Cube = Radium(Cube); 

export default Cube
