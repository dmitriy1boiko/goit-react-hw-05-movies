import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';


export const ImgWrapper = styled.div`
  width: 300px;
  height: 450px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
  }
`;
export const Description = styled.div`
padding: 0 20px 0 20px;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Poster = styled.img`
  width: 300px;
`;

export const Container  = styled.div`
 
  margin-bottom: 15px;
`;

export const Text = styled.p`
  font-size: 16px;
`;
export const LinkWrapper = styled.ul`
	display: flex;
	justify-content: center;
	gap: 40px;
`
export const LinkBtn = styled(Link)`
  text-decoration: none;
  color: blue;
`;

export const ActiveNavLink = styled(NavLink)`
color: blue;


  &.active {
    color: orange;
  }
`;

export const BtnBack = styled.button`
  padding: 10px 30px;
  margin-top: 10px;
  margin-bottom: 10px;

  font-size: 18px;

  border-radius: 8px;
  background-color: black;
`;