import styled from 'styled-components';

const Thing = styled.div`
  color: blue;

  &:hover{
    color: red;
  }

  & ~ &{
    background: tomato;
  }

  & + &{
    background: lime;
  }

  &.something{
    background: orange;
  }

  .something-else &{
    border: 1px solid;
  }
`;

export default Thing;