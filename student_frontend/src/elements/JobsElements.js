import styled from "styled-components"

export const JobsWrapper = styled.section`
  padding: 5rem 0;
`
export const JobsCenter = styled.div`
  width: 80vw;
  margin: 0 auto;
  max-width: 1170px;
  @media screen and (min-width: 992px) {
    width: 90vw;
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 4rem;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;
  @media screen and (min-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`
export const JobButton = styled.button`
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  font-size: 1.25rem;
  letter-spacing: 0.2rem;
  margin: 0 0.5rem;
  transition: all 0.3s linear;
  cursor: pointer;
  padding: 0.25rem 0;
  line-height: 1;
  color: ${props => props.isActive === "true" && "#2caeba"};
  box-shadow: ${props => props.isActive === "true" && "0 2px #2caeba"};
  &:hover,
  &:focus {
    color: #2caeba;
    box-shadow: 0 2px #2caeba;
  }
  @media screen and (min-width: 992px) {
    margin-bottom: 1rem;
    &:hover {
      box-shadow: -2px 0 #2caeba;
    }
    box-shadow: ${props => props.isActive === "true" && "-2px 0 #2caeba"};
  }
`
export const JobInfo = styled.article`
  h3 {
    font-weight: 400;
  }
  h4 {
    text-transform: uppercase;
    color: hsl(210, 22%, 49%);
    background: hsl(212, 33%, 89%);
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
  }
`
export const JobDate = styled.p`
  letter-spacing: 0.2rem;
`
export const JobDesc = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  align-items: center;
  margin-bottom: 1.25rem;
  p {
    margin-bottom: 0;
    color: hsl(209, 34%, 30%);
  }
`
