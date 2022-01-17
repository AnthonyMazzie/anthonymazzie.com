import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>
            Experience
          </SidebarLink>
          <SidebarLink to="soft_skills" onClick={toggle}>
            Soft Skills
          </SidebarLink>
          <SidebarLink to="tech_skills" onClick={toggle}>
            Tech Skills
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contact
          </SidebarLink>
          <SidebarRoute
            to="/resume"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggle}
          >
            Resume
          </SidebarRoute>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
