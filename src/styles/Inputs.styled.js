import styled from 'styled-components';

const Input = styled.input.attrs(props => ({type: 'text', size: props.small ? 5 : undefined}))`
   border: 1px solid palevioletred;
   padding: ${props=> props.padding};
   display: block;
   margin: 0.5rem 0;
`;

export const PasswordInput = styled(Input).attrs({type: 'password'})`
  border: 2px solid aqua;
`;

export default Input;
