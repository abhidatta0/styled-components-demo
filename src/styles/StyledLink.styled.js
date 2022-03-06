import styled from 'styled-components';

const Link = ({className, children, href})=>(
    <a className={className} href={href}>{children}</a>
);

const StyledLink  = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

export default StyledLink;