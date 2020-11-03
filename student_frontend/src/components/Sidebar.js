import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
import {SidebarWrapper, SidebarContainer,} from "../elements"

//Component for opening and closing the sidebar
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarWrapper isOpen={isOpen}>
      <button onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <SidebarContainer>
        <Links sidebar={isOpen}/>
        <SocialLinks linkstyle="sidebar"/>
      </SidebarContainer>
    </SidebarWrapper>
  )
}

export default Sidebar
