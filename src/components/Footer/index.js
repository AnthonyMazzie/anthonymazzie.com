import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  RocketLine,
  OutlineRocket,
  FooterRoute,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";
import Logo from "../logo";
import { Button } from "../ButtonElement";

const Footer = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterRoute
                to="/resume"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleHome}
              >
                Resume
              </FooterRoute>
              <Button
                style={{ top: "50%", left: "50%", margin: "10px 0px 0px 10px" }}
                onClick={toggleHome}
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                to="/"
                dark="true"
              >
                Return to Top {hover ? <OutlineRocket /> : <RocketLine />}
              </Button>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              <Logo />
            </SocialLogo>
            <WebsiteRights>
              Anthony Mazzie &copy; {new Date().getFullYear()}. All rights
              reserved.
            </WebsiteRights>

            <SocialIcons>
              <SocialIconLink
                area-label="Github"
                href="https://github.com/AnthonyMazzie"
              >
                <FaGithub />
              </SocialIconLink>

              <SocialIconLink
                area-label="Twitter"
                href="https://twitter.com/mazzieengineer"
              >
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink
                area-label="LinkedIn"
                href="https://www.linkedin.com/in/anthony-mazzie"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
