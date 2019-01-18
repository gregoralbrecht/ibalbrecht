import styled, { themePx } from 'util/style'

const Wrapper = styled.div`
  padding: ${themePx('space.3')};
  margin-bottom: ${themePx('space.4')};
  font-size: 0.8rem;
  color: hsl(215, 11%, 34%);

  a {
    color: inherit;
  }
`

export default Wrapper
