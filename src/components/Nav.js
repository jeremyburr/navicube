import React from 'react'
import Radium from 'radium'
import {Row, Col} from 'react-bootstrap'
import NavLink from '../containers/NavLink.js'
import CubeContainer from '../containers/CubeContainer.js'

const rowStyle = {
  textAlign: 'center',
  color: 'red',
  marginTop: '10px'
}

let Nav = () =>  (
    <div style={{"position" : "relative"}}>
      <CubeContainer />
        <Row style={rowStyle}>
          <Col xs={4}>
            <NavLink target='1'>
              About
            </NavLink>
          </Col>
          <Col xs={4}>
            <NavLink target='2'>
              Endeavors
            </NavLink>
          </Col>
          <Col xs={4}>
            <NavLink target='3'>
              Contact
            </NavLink>
          </Col>
        </Row>
    </div>
)

Nav = Radium(Nav); 

export default Nav
