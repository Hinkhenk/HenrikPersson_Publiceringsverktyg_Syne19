import styled from "styled-components"

export const HeroWrapper = styled.header`
  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  background: ${props => props.theme.color.primary10};
  position: relative;
  @media screen and (min-width: 992px) {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 65%;
      right: 0;
      bottom: 0;
      background: ${props => props.theme.color.white};
    }
    h4 {
      font-size: 0.85rem;
    }
  }
`
export const HeroCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  height: 100%;
  display: grid;
  align-items: center;
  img {
    display: none;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    width: 95vw;
    img {
      display: block;
      grid-row: 1/1;
      grid-column: 6/-1;
    }
  }
`
export const HeroInfo = styled.article`
  grid-row: 1/1;
  grid-column: 1 / span 8;
  background: ${props => props.theme.color.primary10};
  h4 {
    color: ${props => props.theme.color.grey5};
  }
`
export const HeroUnderline = styled.div`
  margin-bottom: 0.5rem;
  margin-left: 0;
  width: 15rem;
  height: 0.25rem;
  background: ${props => props.theme.color.primary5};
`
