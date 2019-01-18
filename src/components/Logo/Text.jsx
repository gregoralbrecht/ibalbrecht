import styled, { themeGet, themePx } from 'util/style'

const Text = styled.span`
  color: ${themeGet('colors.grey.800')};
  font-weight: 500;
  font-size: ${themePx('fontSizes.2')};
  line-height: 1.3;
`

export default Text
