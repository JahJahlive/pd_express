import styled from 'styled-components';

export const Img = styled.img`
  width: 50%;
  height:100%;
  overflow: hidden;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  }
`

export const BlogCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10rem;
  height: 600px;
  padding: 2rem;
  margin: 0 0 10rem 0;
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
  }
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const CardInfo = styled.p`
  width: 80%;
  line-height: 2.5rem;
  padding: 3rem 1rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  }
`;

export const AboutInfo = styled.div`
  display: block;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 3rem
  }
`;

export const P = styled.p`
  margin: 10px 0;
  text-align: center;
  font-size: 23px;
  font-weight: 450;
  display: block;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem;
  }
`;