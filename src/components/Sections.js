import React from 'react'
import PropTypes from 'prop-types'
import Section from './Section.js'


const Sections = ({sections}) => (
  <div>
    {sections.map(section =>
      <Section 
        key={section.name}
        name={section.name}
        position={section.position}
      />
    )}
  </div>
) 
Sections.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}

export default Sections 
