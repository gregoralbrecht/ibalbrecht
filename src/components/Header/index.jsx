import React from 'react'

import { OutboundLink } from 'components/Link'
import { Container, Flex } from 'components/Grid'
import Logo from 'components/Logo'

import Wrapper from './Wrapper'
import Menu from './Menu'
import Item from './Item'

const Header = () => (
  <Wrapper as="header">
    <Container maxWidth="900px">
      <Flex
        flexDirection={['column', 'row']}
        alignItems={['flex-start', 'flex-end']}
        justifyContent={['space-between']}
      >
        <Flex mr={3}>
          <Logo />
        </Flex>
        <Flex mr={3}>
          <Menu>
            <Item>
              <span>anrufen</span>
              <OutboundLink to="tel:+496152955903" from="header">
                +49 6152 955 903
              </OutboundLink>
            </Item>
            <Item>
              <span>schreiben</span>
              <OutboundLink to="mailto:info@ibalbrecht.de" from="header">
                info@ibalbrecht.de
              </OutboundLink>
            </Item>
          </Menu>
        </Flex>
      </Flex>
    </Container>
  </Wrapper>
)

export default Header
