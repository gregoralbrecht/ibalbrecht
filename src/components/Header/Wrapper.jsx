import styled, { themeGet, themePx } from 'util/style'

const Wrapper = styled.div`
  background: ${themeGet('colors.grey.100')};
  padding: ${themePx('space.3')};
  margin-bottom: ${themePx('space.4')};
`

export default Wrapper
