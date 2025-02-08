import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';


export const Img = styled.img`
  width: 80%;
  height: 100%;
  @media ${(props) => props.theme.breakpoints.md} {
    width: auto;
    height: auto;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 1rem;
  padding-top: 1.5rem;
  padding-right: 1.5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    padding: 0px;
  }
`;

export const Span = styled.span`
  font-size: 1.3rem;
  width: 150px;
  text-align:center;
  font-weight: bold;
`;

export const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    
  }
`;
export const Div2 = styled.div`
  display: flex;
  align-items: center;
  z-index: 500;
  gap:30px;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    background: white;
    width: 200px;
    text-align:center;
    position: relative;
  }
`;
export const Div3 = styled.div`
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 1.8rem;
  line-height: 20px;
  color: darkblue;
  letter-spacing: 2px;
  transition: 0.4s ease;
  &:hover {
    color: blue;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 0.5rem;
    font-size: 1.4rem;
     line-height: 10px;
  }
`;