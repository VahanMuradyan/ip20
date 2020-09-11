import React, { useEffect, useState } from "react";
import { connect, styled, Global, css } from "frontity";
import Link from "./link";
import externalCss from "../css/App.css";
import logo from "../img/logo.png";
import g20Logo from "../img/g20-logo2x.png";

const Header = ({ state }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [stickyHeader, setStickyHeader] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    if (scrollTop > 100) {
      setStickyHeader(true);
    } else {
      setStickyHeader(false);
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <HeaderContainer className={`${stickyHeader && "stickyHeader"}`}>
      <Global styles={css(externalCss)} />
      <div className="container header-container">
        <div className="logos-section">
          <div>
            <ImageLink link="/">
              <img className="site-logo" src={logo} />
            </ImageLink>
          </div>
          <div className="logos-divider"></div>
          <div>
            <img className="g20-logo" src={g20Logo} />
          </div>
        </div>
        <div className="header-links">
          <div>
            {/* {state.router.link == "/" && (
              <StyledLink className="register-link" link="/sign-up/">
                Register Now!
              </StyledLink>
            )} */}
          </div>
          <div>
            {state.router.link != "/sign-up/" && (
              <StyledLink link="#">العربية</StyledLink>
            )}
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const StyledLink = styled(Link)`
  font-family: BukraAltMedium;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  padding: 6px 20px;
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    opacity: 0.7;
  }
`;

const ImageLink = styled(Link)`
  text-decoration: none;
`;
