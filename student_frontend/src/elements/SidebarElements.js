import styled, { keyframes, css } from "styled-components"

//Animation variables
const fadeIn = keyframes`
    0% {
            transform: translateX(-200px);
            opacity: 0;
        }
    100% {
            transform: translateX(0);
            opacity: 1;
        }
`
const slideRight = css`
  animation: ${fadeIn} 0.5s ease-in-out 0.3s forwards;
`
export const SidebarContainer = styled.div`
  //Because I want a custom div name
`
export const SidebarWrapper = styled.aside`
  background: hsl(210, 36%, 96%);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
  transition: all 0.3s linear;

  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};

  button {
    position: absolute;
    right: 4.75%;
    top: 2.75%;
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    color: hsl(360, 67%, 44%);
    cursor: pointer;
  }
  @media screen and (min-width: 992px) {
    transform: translateX(-100%);
  }
`
export const SidebarLinks = styled.ul`
  li {
    opacity: 0;
  }
  li a {
    display: block;
    text-align: center;
    text-transform: capitalize;
    color: hsl(210, 22%, 49%);
    letter-spacing: 0.2rem;
    margin-bottom: 0.5rem;
    font-size: 2rem;
    transition: all 0.3s linear;
    border-radius: 0.25rem;
  }
  li a:hover {
    background: hsl(185, 94%, 87%);
    color: #2caeba;
  }
  li {
    ${slideRight};
  }
  li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  li:nth-of-type(4) {
    animation-delay: 1s;
  }
  li:nth-of-type(5) {
    animation-delay: 1.25s;
  }
`
