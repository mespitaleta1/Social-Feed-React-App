import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

export const Nav = styled.nav`
  background-color: #741af6;
  display: flex;

  @media ${breakpoints.device.sm} {
    background-color: transparent;
    position: absolute;
    width: 100%;
    z-index: 90;
    top: 0;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.device.sm} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 100px;
  }
`;

export const Hero = styled.div`
  position: relative;
  z-index: 1;

  @media ${breakpoints.device.sm} {
    display: flex;
  }
`;

export const HeroContent = styled.div`
  color: #fff;
  padding: 15px;
  background-color: #741af6;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  max-width: 50%;
  bottom: 0;
  max-height: fit-content;

  @media ${breakpoints.device.sm} {
    flex-basis: 60%;
    margin: 0;
    padding: 40px;
    position: relative;
    max-width: 100%;
  }
`;

export const HeroTextContent = styled.div`
  max-width: 100%;
  margin: 0 auto;

  @media ${breakpoints.device.sm} {
    max-width: 70%;
  }

  @media ${breakpoints.device.md} {
    max-width: 54%;
  }

  @media ${breakpoints.device.lg} {
    max-width: 45%;
  }

  @media ${breakpoints.device.xl} {
    max-width: 37%;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 34px;
  text-align: center;
  margin-bottom: 60px;

  @media ${breakpoints.device.sm} {
    font-size: 48px;
    text-align: left;
    margin-bottom: 50px;
  }
`;

export const Button = styled.span`
  text-align: center;
  background-color: #89fb80fa;
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
  display: ${(props) => (props.variant === 'footer' ? 'inline' : 'block')};
  padding: ${(props) => (props.variant === 'footer' ? '21px' : '17px')};
  cursor: ${(props) => (props.variant === 'footer' ? 'auto' : 'pointer')};
`;

export const HeroDescription = styled.span`
  display: block;
  margin-top: 20px;
  font-size: 9px;
  text-align: center;

  @media ${breakpoints.device.sm} {
    font-size: 18px;
    text-align: left;
    margin-top: 10px;
  }
`;

export const HeroImageContainer = styled.div`
  height: 400px;

  @media ${breakpoints.device.sm} {
    flex-basis: 40%;
    position: relative;
    height: auto;
    width: 100%;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Footer = styled.footer`
  position: relative;
`;

export const FooterBanner = styled.div`
  background-color: #741af6;
  margin-top: 50px;
  font-size: 2rem;
  text-align: center;
  color: #fff;
  height: 66px;
  padding-top: 14px;
  bottom: 0px;
  @media ${breakpoints.device.sm} {
    margin-top: 100px;
  }
`;
