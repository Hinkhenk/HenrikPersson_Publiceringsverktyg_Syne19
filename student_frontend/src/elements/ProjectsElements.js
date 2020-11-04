import styled from "styled-components"
import { FaShareSquare } from "react-icons/fa"

export const ProjectsSection = styled.section`
  padding: 5rem 0;
  background: hsl(210, 36%, 96%);
`
export const ProjectsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`
export const ProjectWrapper = styled.article`
  display: grid;
  margin-bottom: 4rem;
  &:hover div::after {
    opacity: 0;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    &:nth-of-type(even) div {
      grid-column: 5 / -1;
      grid-row: 1 / 1;
    }
    &:nth-of-type(even) section {
      grid-column: 2 / span 7;
      grid-row: 1 / 1;
      text-align: left;
    }
  }
`
export const ShareIcon = styled(FaShareSquare)`
  color: #2caeba;
  font-size: 1.25rem;
  margin-right: 0.5rem;
  transition: all 0.3s linear;

  :hover {
    color: hsl(184, 91%, 17%);
  }
`
export const ProjectNumber = styled.span`
  display: inline-block;
  font-size: 1.25rem;
  color: #2caeba;
  margin-bottom: 0.75rem;
`
export const ProjectStack = styled.div`
  margin-bottom: 1rem;
  span {
    display: inline-block;
    background: hsl(212, 33%, 89%);
    color: hsl(210, 22%, 49%);
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
  }
`
export const ProjectInfo = styled.section`
  background: #fff;
  padding: 1rem 2rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  h3 {
    font-weight: 500;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
  @media screen and (min-width: 992px) {
    border-radius: 0.25rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    z-index: 1;
    grid-column: 5 /12;
    grid-row: 1 / 1;
  }
`
