import styled, { themePx, themeGet } from 'util/style'

const Square = styled.span`
  display: inline-block;
  width: 60px;
  height: 60px;
  margin-right: ${themePx('space.3')};
  background: ${themeGet('colors.ibaBlue')};
`

export default Square
