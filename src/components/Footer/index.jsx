import React from 'react'

import { Flex, Box } from 'components/Grid'
import { Link } from 'components/Link'

import Wrapper from './Wrapper'

const Footer = () => (
  <Wrapper as="footer">
    <Flex width="100%" flexDirection={['column', 'row']}>
      <Box width={['100%', '33.33%']}>
        <p>
          Ingenieurbüro <br /> Horst-Dieter Albrecht
        </p>
      </Box>
      <Box width={['100%', '33.33%']}>
        <p>
          Emil-von-Behring-Str. 10 <br /> 64521 Groß-Gerau
        </p>
      </Box>
      <Box width={['100%', '33.33%']}>
        <Link to="/impressum" from="footer">
          Impressum
        </Link>{' '}
        <br />{' '}
        <Link to="/datenschutz" from="footer">
          Datenschutz
        </Link>
      </Box>
    </Flex>
  </Wrapper>
)

export default Footer
