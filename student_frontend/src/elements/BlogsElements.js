import styled from "styled-components"

export const BlogsWrapper = styled.section`
  padding: 5rem 0;
`
export const BlogsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  @media screen and (min-width: 992px) {
    width: 95vw;
  }
  @media screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
    column-gap: 2rem;
  }
`
export const BlogArticle = styled.article`
  display: block;
  margin-bottom: 2rem;
  background: hsl(210, 36%, 96%);
  border-radius: 0.25rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s linear;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
`
export const BlogCard = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 1.5rem 1rem;
  h4 {
    color: hsl(209, 61%, 16%);
  }
`

export const BlogFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin-bottom: 0;
    font-weight: bold;
    color: hsl(210, 22%, 49%);
  }
  p:first-of-type {
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
export const BlogTemplateWrapper = styled.section`
  background: hsl(210, 36%, 96%);
  min-height: calc(100vh - 5rem - 9rem);
  padding: 5rem 0;
  h1,
  h2 {
    text-align: center;
  }
  ul {
    margin-top: 2rem;
    display: inline-block;
  }
  ul li {
    background: hsl(212, 33%, 89%);
    color: hsl(210, 22%, 49%);
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    text-transform: uppercase;
  }
  blockquote {
    background: hsl(212, 33%, 89%);
    border-radius: 0.25rem;
    padding: 1rem;
    line-height: 2;
    color: #2caeba;
    margin: 2rem 0;
  }
  pre {
    background: #222;
    color: yellow;
    overflow-x: scroll;
    padding: 1rem 1.5rem;
    border-radius: 0.25rem;
  }
  img {
    width: 15rem;
    height: 15rem;
    margin: 3rem 0;
  }
`
export const BlogTemplateCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`