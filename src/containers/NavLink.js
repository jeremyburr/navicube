import { connect } from 'react-redux'
import { goToSection } from '../actions/index.js'
import Link from '../components/Link.js'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.target === state.nav.index
})

const mapDispatchToProps = (dispatch, ownProps) =>  ({
  onClick: () => {
    dispatch(goToSection(ownProps.target))
  }
})

const NavLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default NavLink
