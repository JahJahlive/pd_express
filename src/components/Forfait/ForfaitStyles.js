import styled from "styled-components"

export const FooterWrapper = styled.section`
  box-sizing: content-box;
  background-image: url('/images/bg-section2.png');

  background-position:  25%  10%;
  background-repeat: no-repeat;
  background-color: rgba(0,0,0,0.1);
  background-blend-mode: lighten;
  padding: 2rem;

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
  }
`
export const Title = styled.h1`
 	color: white;
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 4.5rem;
	text-align: center;
	@media ${props => props.theme.breakpoints.md}{
		font-size: 16px;
		line-height: 28px;
	}

	@media ${props => props.theme.breakpoints.sm}{
		line-height: 22px;
		font-size: 1.8rem;
		min-width: 100px;
	}
`
export const Slogan = styled.p`
 	color: white;
	min-width: 200px;
	letter-spacing: 0.07em;
	font-size: 1.7rem;
	line-height: 25px;
	width: 50%;
	margin: 0 auto;

	@media ${props => props.theme.breakpoints.md}{
		font-size: 16px;
		line-height: 28px;
		width: 90%;
		font-size: 1.4rem;
	}

	@media ${props => props.theme.breakpoints.sm}{
		line-height: 22px;
		font-size: 14px;
		min-width: 100px;
	}
`
export const FormCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  padding: 2rem;
  width: 100%;
  min-height: 500px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const ForfaitTable = styled.div`
	display: flex;
	width: 80%;
	margin: 2rem auto;

  @media ${props => props.theme.breakpoints.lg} {
	margin: 1rem auto;
	width: 80%;
	flex-direction: column;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;

	flex-direction: column;
  }
`

export const ForfaitItem = styled.div`
	display: flex;
	padding: 1.8rem;
	flex-direction: column;
	border: 0.01px solid #f0f0f0; 

@media ${props => props.theme.breakpoints.lg} {
	
  }
  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
  }
`