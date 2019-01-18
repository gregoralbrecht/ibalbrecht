import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, theme } from 'util/style'
import GlobalStyles from 'util/style/GlobalStyles'
import 'typeface-ibm-plex-sans'

import Header from 'components/Header'
import Footer from 'components/Footer'
import { Box, Container } from 'components/Grid'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Header />
      <GlobalStyles />
      <Container maxWidth="900px" px={3}>
        {children}
        <Box mt={3}>
          <Footer />
        </Box>
      </Container>
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
