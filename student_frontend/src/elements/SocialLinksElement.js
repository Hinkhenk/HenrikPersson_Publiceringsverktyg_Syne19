import styled from "styled-components"

export const SocialLinksWrapper = styled.ul`
  margin: ${props => {
    switch (props.linksStyle) {
      case "footer":
        return "0 auto 1rem auto"
      default:
        return "2rem 0 0 0"
    }
  }};
  width: 15rem;
  display: flex;
  justify-content: space-between;
  a {
    font-size: 1.75rem;
    color: ${props => props.theme.color.white};
    transition: ${props => props.theme.transition};
  }
  a:hover {
    color: ${props => props.theme.color.primary5};
  }
`
