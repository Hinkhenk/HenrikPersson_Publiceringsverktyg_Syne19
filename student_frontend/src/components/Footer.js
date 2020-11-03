import React from "react"
import SocialLinks from "../constants/socialLinks"
import {FooterWrapper, FooterContent} from "../elements"

//Footer component 
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <SocialLinks styleClass="footer-links" linksStyle="footer"/>
        <h4>
          copyright&copy; {new Date().getFullYear()} | &nbsp;
          <span>HenkDev</span> | all rights reserved
        </h4>
      </FooterContent>
    </FooterWrapper>
  )
}
export default Footer