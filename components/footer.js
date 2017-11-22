import { SecondaryButton } from "./ui/buttons";
import React from "react";
import Link from "next/link";
import styled from "styled-components";

const FooterContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  padding: ${props => props.theme.spacing.padding};
`;

class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <Link href={"/faq"}>
          <SecondaryButton style={{ backgroundColor: "#fafbfc" }}>
            FAQ
          </SecondaryButton>
        </Link>
        <Link href={"/privacy"}>
          <SecondaryButton style={{ backgroundColor: "#fafbfc" }}>
            Privacy
          </SecondaryButton>
        </Link>
        <Link href={"/contact"}>
          <SecondaryButton style={{ backgroundColor: "#fafbfc" }}>
            Contact
          </SecondaryButton>
        </Link>
        <a href={"https://github.com/gu-app-club/save-the-net"}>
          <SecondaryButton style={{ backgroundColor: "#fafbfc" }}>
            GitHub
          </SecondaryButton>
        </a>
      </FooterContainer>
    );
  }
}

export default Footer;
