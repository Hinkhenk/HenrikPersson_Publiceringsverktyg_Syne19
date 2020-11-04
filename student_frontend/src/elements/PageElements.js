import styled from "styled-components"

//About Wrapper
export const AboutPageWrapper = styled.section`
  background: hsl(210, 36%, 96%);
  min-height: calc(100vh - 5rem - 9rem);
  padding: 7rem 0;
`
//Blog Wrapper
export const BlogPageWrapper = styled.section`
  background: hsl(210, 36%, 96%);
  min-height: calc(100vh - 5rem - 9rem);

  article {
    background: #fff;
  }
`
//Contact Wrapper
export const ContactPageWrapper = styled.section`
  background: hsl(210, 36%, 96%);
  min-height: calc(100vh - 5rem - 9rem);

  display: grid;
  place-items: center;
  padding: 5rem 0;
`
//Error Wrapper
export const ErrorPageWrapper = styled.main`
  background: hsl(210, 36%, 96%);
  min-height: calc(100vh - 5rem - 9rem);
  display: grid;
  place-items: center;
  background: hsl(186, 100%, 94%);
  text-align: center;
  h1 {
    text-transform: uppercase;
    color: hsl(184, 91%, 17%);
    margin-bottom: 2rem;
  }
`
