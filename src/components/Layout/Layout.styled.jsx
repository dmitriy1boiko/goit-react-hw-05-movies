import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 16px;
`;

export const Header = styled.header`
  padding: 8px 25px;
  margin-bottom: 15px;
`;
export const Nav = styled.nav`
  display: flex;
  gap: 12px;
  justify-content: center;
`;
export const StyledLink = styled(NavLink)`
  width: 100px;
  padding: 8px 32px;
  border: 3px solid var(--brown);
  background-color: var(--cream);
  color: var(--brown);
  border-radius: 50px;
  :hover {
    background-color: var(--brown);
    color: var(--cream);
  }
  &.active {
    background-color: var(--brown);
    color: var(--hover);
  }
`;

