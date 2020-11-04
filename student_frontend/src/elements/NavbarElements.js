import styled from "styled-components"

//Original logo in navbar
export const LogoImg = styled.img`
  height: 65px;
  width: auto;
  margin-bottom: 0.375rem;
`

export const NavbarWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: #fff;
`
export const NavCenter = styled.div`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
`
export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ToggleButton = styled.button`
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: #2caeba;
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    color: hsl(185, 84%, 25%);
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavLinks = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    li {
      margin-right: 2rem;
    }
    a {
      text-transform: capitalize;
      color: hsl(209, 61%, 16%);
      font-weight: bold;
      letter-spacing: 0.2rem;
      transition: all 0.3s linear;
      padding: 0.5rem 0;
    }
    a:hover {
      color: #2caeba;
      box-shadow: 0px 2px #2caeba;
    }
  }
`