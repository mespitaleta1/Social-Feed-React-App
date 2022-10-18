import React from 'react';
import {
  NAV_OPTIONS,
  heroTitle,
  buttonText,
  description,
  heroImage,
  footerText
} from './Layout.const';
import {
  Nav,
  NavList,
  NavLink,
  Header,
  Hero,
  HeroContent,
  HeroTextContent,
  HeroTitle,
  Button,
  HeroDescription,
  HeroImageContainer,
  HeroImage,
  Footer,
  FooterBanner
} from './Layout.style';

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Header>
          <Nav>
            <NavList>
              <li>
                <NavLink to="/">{NAV_OPTIONS.firstNavItem}</NavLink>
              </li>
              <li>
                <NavLink to="/one-post">{NAV_OPTIONS.secondNavItem}</NavLink>
              </li>
            </NavList>
          </Nav>

          <Hero>
            <HeroContent>
              <HeroTextContent>
                <HeroTitle>{heroTitle}</HeroTitle>
                <div>
                  <Button>{buttonText}</Button>
                  <HeroDescription>{description}</HeroDescription>
                </div>
              </HeroTextContent>
            </HeroContent>
            <HeroImageContainer className={HeroImageContainer}>
              <HeroImage src={heroImage.image} alt={heroImage.altText} />
            </HeroImageContainer>
          </Hero>
        </Header>
      </div>
      {children}
      <Footer>
        <FooterBanner>
          <Button variant="footer">{footerText}</Button>
        </FooterBanner>
      </Footer>
    </div>
  );
};

export default Layout;
