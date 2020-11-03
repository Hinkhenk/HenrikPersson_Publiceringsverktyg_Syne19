import styled from "styled-components"

//About Wrapper
export const AboutPageWrapper = styled.section`
    background: ${props => props.theme.color.grey10};
    min-height: calc(100vh - 5rem - 9rem);
    padding: 7rem 0;
`
//Blog Wrapper
export const BlogPageWrapper = styled.section`
    background: ${props => props.theme.color.grey10};
    min-height: calc(100vh - 5rem - 9rem);

    article {
        background: #fff;
    }
`
//Contact Wrapper
export const ContactPageWrapper = styled.section`
    background: ${props => props.theme.color.grey10};
    min-height: calc(100vh - 5rem - 9rem);

    display: grid;
    place-items: center;
    padding: 5rem 0;
`
//Error Wrapper
export const ErrorPageWrapper = styled.main`
    background: ${props => props.theme.color.grey10};
    min-height: calc(100vh - 5rem - 9rem);
    display: grid;
    place-items: center;
    background: ${props => props.theme.color.primary10};
    text-align: center;
    h1 {
        text-transform: uppercase;
        color: ${props => props.theme.color.primary1};
        margin-bottom: 2rem;
    }
`