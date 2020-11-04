import styled from "styled-components"

export const Service = styled.article`
  background: #fff;
  padding: 3rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: 0.25rem;
  text-align: center;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  p {
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }
  div {
    width: 3rem;
    height: 0.12rem;
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }
  &:hover {
    background: #2caeba;
    color: hsl(185, 94%, 87%);
    p {
      color: hsl(185, 94%, 87%);
    }
    div {
      background: hsl(185, 94%, 87%);
    }
  }
`
export const ServiceUnderline = styled.div`
  width: 3rem;
  height: 0.12rem;
  margin-bottom: 1.25rem;
  background: #2caeba;
  margin-left: auto;
  margin-right: auto;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
`
export const ServicesCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  @media screen and (min-width: 992px) {
    width: 95vw;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 676px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    -webkit-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem;
  }
`
export const ServicesSection = styled.section`
  background: hsl(210, 36%, 96%);
  padding: 5rem 0;
`
