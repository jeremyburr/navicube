import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Radium from 'radium'
const { StyleRoot } = Radium
import Nav from './components/Nav.js'
import CubeContainer from './containers/CubeContainer.js'
import SectionsContainer from './containers/SectionsContainer.js'
import { Grid } from 'react-bootstrap'

const App = () => (
	<StyleRoot>
		<Grid> 
			<Nav />
			<CubeContainer />
			<SectionsContainer />
		</Grid>
	</StyleRoot>
)

export default App;
