import React from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title.js'
import Content from '../components/Content.js'

const Section = ({name, position}) => ( 
	<div>
		<Title name={name} position={position} />
		<Content name={name} position={position} />
	</div>
) 

Section.propTypes = {
	name: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
}
export default Section 

		
