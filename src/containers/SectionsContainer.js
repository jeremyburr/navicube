import { connect } from 'react-redux'
import Sections from '../components/Sections.js' 

const mapStateToProps = (state, ownProps) => ({ 
	sections: state.nav.sections,
	current: state.nav.current,
}) 
const mapDispatchToProps =  {

} 
const SectionsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Sections) 

export default SectionsContainer



