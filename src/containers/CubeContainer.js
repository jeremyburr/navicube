import { connect } from 'react-redux'
import Cube from '../components/Cube.js'
import { resizeCube } from '../actions/index.js'

const mapStateToProps = (state, ownProps) => ({ 
  current: state.nav.current,
})

const mapDispatchToProps = (dispatch, ownProps) => ({ 
	resizeCube, 
})

const CubeContainer = connect (
  mapStateToProps,
  mapDispatchToProps,
)(Cube)

export default CubeContainer
