import styled, { themePx } from 'util/style'

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
    z-index: 10;

    @media screen and (min-width: 900px) {
      font-size: 44px;
    }
  }

  span {
    display: initial;
    position: relative;
  }

  span::after {
    content: '';
    position: absolute;
    left: -0.2em;
    top: 60%;
    height: 0.6em;
    width: calc(100% + 0.6em);
    z-index: -1;
    background: #daf1ef;
  }
`

export default Wrapper
