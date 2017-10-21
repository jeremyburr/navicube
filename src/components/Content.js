import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col} from 'react-bootstrap'
import Radium from 'radium' 
import { Scrollbars } from 'react-custom-scrollbars'
const style = {
  all: {
    textAlign: 'left',
    position: 'absolute',
    width: '100%',
    height: '300px',
    '@media (min-width: 1200px)' : {
      height: '600px'
    },
    '@media (min-width: 992px)' : {
    height: '500px'
    },
    '@media (min-width: 768px)' : {
    height: '400px'
    },
    transition: 'all 3s',
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
    top: '30px',
    fontSize: '28px',
    textAlign: 'center',
    '@media (min-width: 768px)': {
      top: '45px',
    },
    '@media (min-width: 992px)' : {
      top: '65px'
    }, 
  },
  ABOUT: {
    top: '75px',
    '@media (min-width: 768px)' : {
      top: '120px',
    },
    '@media (min-width: 992px)' : {
      top: '145px',
    }, 
  },
  ENDEAVORS: {
    top: '125px',
    '@media (min-width: 768px)': {
      top: '140px',
    },
    '@media (min-width: 992px)': {
      top: '175px',
    }

  },
  CONTACT: {
    top: '75px',
    '@media (min-width: 768px)': {
        top: '120px',
    }, 
    '@media (min-width: 768px)': {
        top: '145px',
    } 
  }
}

const h3 = {
  fontSize: '28px', 
  paddingBottom: '5px',
  marginTop: '0px'
}
const h4 = {
  fontSize: '26px'
}
let Content = ({name, position}) => {
  switch (name) {
    case 'HOME':
      return (
        <Row>
          <Col xs={1} md={2} />
          <Col xs={10} md={8}>
            <div style={[style.all, style[name], style[position]]}>
               Welcome to PsyBurr  
            </div>
          </Col>
          <Col xs={1} md={2} />
        </Row>
      )
    case 'ABOUT':
      return ( 
        <Row>
          <Col xs={1} md={2} />
          <Col xs={10} md={8}> 
            <div style={[style.all, style[name], style[position]]}>
              <Scrollbars>
                <p>
                 This site is built with react-redux. The source code is on <a href="https://github.com/jeremyburr/psyburr">GitHub</a>. </p>
                <p>
                  I'm Jeremy, a front-end developer and aspring full-stack engineer intrigued by many areas of computer science. I'm particularly interested in decentralized virtual machines/cryptocurrencies, the 'Internet of Things', and AI/singularity concepts. 
                </p>
                <p>
                 In my spare time, I like to play records, ski, and swim. 
                </p>
              </Scrollbars>
            </div>
          </Col>
          <Col xs={1} md={2} />
        </Row>
      )
    case 'ENDEAVORS': 
      return ( 
        <Row>
          <Col xs={1} md={2}  /> 
          <Col xs={10} md={8}> 
            <div style={[style.all, style[name], style[position]]}> 
              <Scrollbars>
                <div style={{"padding" : "20px"}}>
                  <h3 style={h3}> Website Development</h3>
                    <p>  
                      In college, I taught myself to code, and started building websites for fun. Originally working for my student peers, I went on to freelance for several non-profit organizations and advertising agencies around Manhattan.
                    </p>
                    <br />
                  <h3 style={h3}> Other Programming</h3>
                    <p>
                       This past year, I became intrigued by the emerging fintech sector. I took time off from front-end development to study decentralized virtual machines like Ethereum, trade cryptographic assets like bitcoin. transition to linux, teach myself react-redux, and brainstorm open source projects. 
                    </p><br />
                  <h3 style={h3}> Free and Open Source Development </h3>
                  <p>
                   I am in the initial stages of development for a a 3D modeling framework and a desktop color inversion program. In the future, I intend to develop an automated vegetable growth system, and a physical command interface for operating a computer with a virtual reality suit. I am also privately developing a crypto-asset trading program.
                  </p>
                </div>
              </Scrollbars>
            </div>
          </Col> 
          <Col xs={1} md={2} /> 
        </Row>
      )
    case 'CONTACT':
      return (
        <Row>
          <Col xs={1} md={2} />
          <Col xs={10} md={8}>
            <div style={[style.all, style[name], style[position]]}>
              <div style={{"fontSize" : "20px"}}>
                 Email: jeremy@psyburr.com <br />  
                 GitHub: <a href="https://github.com/jeremyburr">github.com/jeremyburr</a>
              </div>
            </div>
          </Col>
          <Col xs={1} md={2} />
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
