import styled from 'styled-components';


export const SlideItem = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: rgba(0,0,0,0.1);
  background-blend-mode: lighten;
`;

export const Title = styled.h1`
  color: white;
`;

export const Description = styled.p`
  color: white;
  line-height: 30px;
  font-size: 2.5rem;
  width: 100%;
  margin: 3rem 0 3rem 0;
`;

export const Link = styled.a`
  font-size: 1.7rem;
  color: white;
  font-weight: bold;
  transition: 0.4s ease;
  padding: 20px;
  border-radius: 5px;
  background: darkblue;
  &:hover {
    color: white;
    background: green;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;