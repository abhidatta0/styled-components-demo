import styled from 'styled-components';

export const Link = styled.a`
   display: flex;
   align-items: center;
   padding: 5px 10px;
   background: papayawhip;
   color: palevioletred;
   border: 2px solid grey;
`;

export const Icon = styled.svg`
   flex: none;
   transition: fill 0.25s;
   width: 48px;
   height: 48px;

   ${Link}:hover &{
       fill: rebeccapurple;
   }
`;

export const Label = styled.span`
   display: flex;
   align-items: center;
   line-height: 1.2;

   &::before {
    content: '◀';
    margin: 0 10px;
   }
`;