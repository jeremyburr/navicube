import { connect } from 'react-redux'
import Cube from '../components/Cube.js'

const mapStateToProps = (state, ownProps) => ({ 
  current: state.nav.current
})

const mapDispatchToProps = (dispatch, ownProps) => ({ 
})

const CubeContainer = connect (
  mapStateToProps,
  mapDispatchToProps,
)(Cube)

export default CubeContainer
