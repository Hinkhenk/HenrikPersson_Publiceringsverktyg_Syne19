import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  text-transform: uppercase;
  background: #2caeba;
  color: hsl(212, 33%, 89%);
  padding: 0.375rem 0.75rem;
  letter-spacing: 0.2rem;
  display: inline-block;
  font-weight: 700;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;

  &:hover {
    color: hsl(184, 91%, 17%);
    background: hsl(184, 80%, 74%);
  }
`
export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  text-transform: uppercase;
  background: #2caeba;
  color: hsl(185, 94%, 87%);
  letter-spacing: 0.2rem;
  display: inline-block;
  font-weight: 700;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  &:hover {
    color: hsl(184, 91%, 17%);
    background: hsl(184, 80%, 74%);
  }
`
export const CenterButton = styled(props => <Link {...props} />)`
  text-transform: uppercase;
  background: #2caeba;
  color: hsl(212, 33%, 89%);
  padding: 0.375rem 0.75rem;
  letter-spacing: 0.2rem;
  display: inline-block;
  font-weight: 700;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  display: block;
  width: 12rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 3rem;
  &:hover {
    color: hsl(184, 91%, 17%);
    background: hsl(184, 80%, 74%);
  }
`
export const CVButton = styled.div`
  text-transform: uppercase;
  background: #2caeba;
  color: hsl(185, 94%, 87%);
  padding: 0.375rem 0.75rem;
  letter-spacing: 0.2rem;
  display: inline-block;
  font-weight: 700;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  &:hover {
    color: hsl(184, 91%, 17%);
    background: hsl(184, 80%, 74%);
  }
`
