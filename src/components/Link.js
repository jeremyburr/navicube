import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium' 

const navLinkStyle = {
  color: '#00ff14',
  fontWeight: 'bold',
  textShadow: '1px 1px #1B1B1B',
  '@media (min-width: 320px)' : {
    fontSize: '20px'
  },
  '@media (min-width: 375px)' : {
    fontSize: '24px'
  },
  '@media (min-width: 414px)' : {
    fontSize: '24px'
  }, 
  '@media (min-width: 768px)' : {
    fontSize: '32px'
  }, 
  '@media (min-width: 992px)' : {
    fontSize: '24px'
  }, 

}
const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span style={navLinkStyle}>{children}</span>
  } 
  return (
    <a style={navLinkStyle} href="#"
      onClick={e => {
        e.preventDefault()
          onClick()
      }}
    >
      {children}
    </a>
  )
}

Link = Radium(Link)

Link.propTypes = { 
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
