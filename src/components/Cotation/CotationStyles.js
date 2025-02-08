import styled from "styled-components"

export const FooterWrapper = styled.section`
  box-sizing: content-box;
  background-image: url('/images/bg-section.png');
  text-align: center;
  background-position:  25%  10%;
  background-repeat: no-repeat;
  background-color: rgba(0,0,0,0.1);
  background-blend-mode: lighten;
  padding: 2rem;
`

export const Title = styled.h1`
 	color: white;
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 5rem;

	@media ${props => props.theme.breakpoints.md}{
		font-size: 30px;
		line-height: 28px;
	}

	@media ${props => props.theme.breakpoints.sm}{
		line-height: 4rem;
		min-width: 100px;
	}
`
export const Slogan = styled.h2`
 	color: white;
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 2.5rem;
	line-height: 20px;
	padding: 0.5rem;
	width: 50%;
	margin: 0 auto;

	@media ${props => props.theme.breakpoints.sm}{
		line-height: 22px;
		font-size: 18px;
    	width: 100%;
	}
`

export const FormCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  padding: 1rem;
  width: 100%;
  min-height: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const CardItem = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;


export const FlexBlock = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 15px;
  padding: 2rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: column;
  }
`;

export const Block = styled.div`
	text-align:center;
  width: 33%;
  @media ${(props) => props.theme.breakpoints.lg} {
  display:flex;
  margin: 0 auto;
    flex-direction: column;
	width: 80%;
  }
`;