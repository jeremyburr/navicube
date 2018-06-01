import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Radium from 'radium'
const { StyleRoot } = Radium
import Nav from './components/Nav.js'
import SectionsContainer from './containers/SectionsContainer.js'
import CubeContainer from './containers/CubeContainer.js'
import Stars from './components/Stars.js'
import { Grid } from 'react-bootstrap'
const appStyle =  {
	overflowX:  "hidden" 
}

const App = () => (
  <div>
    <StyleRoot>
		<CubeContainer />
    <Stars />	
      <Grid> 
				<Nav />
				<SectionsContainer />
      </Grid>
    </StyleRoot>
  </div>
)

export default App
