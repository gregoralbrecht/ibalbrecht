import styled, { themePx, themeGet } from 'util/style'

const Wrapper = styled.div`
  padding: ${themePx('space.3')};
  margin-bottom: ${themePx('space.4')};
  font-size: 0.8rem;
  color: ${themeGet('colors.grey.700')};

  a {
    color: inherit;
  }
`

export default Wrapper
