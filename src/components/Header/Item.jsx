import styled, { themePx, themeGet } from 'util/style'

const Item = styled.li`
  display: inline-flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: ${themePx('fontSizes.2')};
  line-height: 1.3;
  font-weight: 'normal';

  & + & {
    margin-left: ${themePx('space.4')};
  }

  a {
    color: ${themeGet('')};
    font-size: ${themePx('fontSizes.2')};
    font-weight: 500;
  }
`

export default Item
