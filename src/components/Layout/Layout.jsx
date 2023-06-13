
import { Suspense } from 'react';
import { Container, Header, Nav, StyledLink } from './Layout.styled';
const { Outlet } = require('react-router-dom');


const Layout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <StyledLink to={'/'} >Home</StyledLink>
          <StyledLink to={'/movies'}>Movies</StyledLink>
        </Nav>
      </Header>
      <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
export default Layout;
