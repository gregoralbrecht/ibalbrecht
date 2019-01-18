import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'

const Hero = ({ children }) => <Wrapper>{children}</Wrapper>

Hero.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Hero
