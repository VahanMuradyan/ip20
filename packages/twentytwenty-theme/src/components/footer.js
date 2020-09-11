import React from "react";
import { styled, connect } from "frontity";
import saipLogo from "../img/saip-logo.png";

// Component that provides scroll to top functionality
const BackToTop = () => {
  // scroll to top function
  const scrollToTop = (event) => {
    // prevent the default behaviors
    event.preventDefault();
    // scroll to the top smoothly
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <a href="#site-header" onClick={scrollToTop} style={{ cursor: "pointer" }}>
      <span style={{ marginRight: 8 }}>To the top</span>
      <span className="arrow" aria-hidden="true">
        ↑
      </span>
    </a>
  );
};

const Footer = ({ state }) => {
  const currentYear = new Date().getFullYear();
  const { footerBg } = state.theme.colors;

  return (
    <SiteFooter bg={footerBg} role="contentinfo">
      <div className="container footer-container">
        <div>
          <img src={saipLogo} />
        </div>
        <p style={{ marginBottom: "0" }}>
          All rights reserved to Saudi Authority for Intellectual Property ©{" "}
          {currentYear}
        </p>
      </div>
    </SiteFooter>
  );
};

export default connect(Footer);

const SiteFooter = styled.footer`
  margin-top: 5rem;
  border-color: #dcd7ca;
  border-style: solid;
  border-width: 0;
  padding: 20px 0;
  background-color: #00496d;
  font-family: "BukraLight";
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #ffffff;
`;
