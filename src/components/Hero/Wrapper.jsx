import styled, { themeGet, themePx } from 'util/style'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: ${themePx('space.3')};
  min-height: 25vh;
  width: 100%;

  h1 {
    line-height: 1.7;
    margin: 0;
    font-size: calc(20px + (44 - 20) * ((100vw - 320px) / (900 - 320)));

    @media screen and (min-width: 900px) {
      font-size: 44px;
    }
  }
`

export default Wrapper
