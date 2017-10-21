import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Radium from 'radium'
const { StyleRoot } = Radium
import Nav from './components/Nav.js'
import SectionsContainer from './containers/SectionsContainer.js'
import Stars from './components/Stars.js'
import { Grid } from 'react-bootstrap'

const App = () => (
<div>
 <Stars />	
 <StyleRoot>
    <Grid> 
      <div style={{"position" : "relative"}}>
        <Nav />
        <SectionsContainer />
      </div>
    </Grid>
  </StyleRoot>
</div>
)

export default App;
