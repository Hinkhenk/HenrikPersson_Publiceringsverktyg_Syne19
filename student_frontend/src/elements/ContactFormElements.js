import styled from "styled-components"

export const ContactFormWrapper = styled.article`
  background: #fff;
  border-radius: 0.25rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s linear;
  width: 90vw;
  max-width: 35rem;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  h3 {
    padding-top: 1.25rem;
    color: hsl(210, 22%, 49%);
  }
`
export const ContactFormGroup = styled.div`
  padding: 1rem 1.5rem;
`
export const ContactInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  margin-bottom: 1.25rem;
  background: hsl(210, 36%, 96%);
  border-radius: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  ::placeholder {
    font-family: Roboto, sans-serif;
    color: hsl(209, 61%, 16%);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }
`
export const ContactInputText = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  margin-bottom: 1.25rem;
  background: hsl(210, 36%, 96%);
  border-radius: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  ::placeholder {
    font-family: Roboto, sans-serif;
    color: hsl(209, 61%, 16%);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }
`
