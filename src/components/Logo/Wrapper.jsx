import styled, { themePx, themeGet } from 'util/style'

import { Link } from 'components/Link'

const Wrapper = styled(Link)`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-end;
  text-decoration: none;
  color: red;
  font-size: ${themePx('fontsizes.1')};
  margin-bottom: ${themePx('space.3')};

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    margin-bottom: 0;
  }
`

export default Wrapper
