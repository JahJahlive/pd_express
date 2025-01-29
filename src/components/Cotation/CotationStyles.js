import styled from "styled-components"

export const FooterWrapper = styled.section`
  box-sizing: content-box;
  background-image: url('/images/bg-section.png');

  background-position:  25%  10%;
  background-repeat: no-repeat;
  background-color: rgba(0,0,0,0.1);
  background-blend-mode: lighten;
  padding: 2rem;

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`

export const Title = styled.h1`
 	color: white;
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 5rem;

	@media ${props => props.theme.breakpoints.md}{
		font-size: 16px;
		line-height: 28px;
	}

	@media ${props => props.theme.breakpoints.sm}{
		line-height: 22px;
		font-size: 14px;
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

	@media ${props => props.theme.breakpoints.md}{
		font-size: 16px;
		line-height: 28px;
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
  padding: 1rem;
  width: 100%;
  min-height: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;