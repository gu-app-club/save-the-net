import { SecondaryButton } from "./ui/buttons";
import React from "react";
import Link from "next/link";

class Footer extends React.Component {
  render() {
    return (
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "row"
        }}
      >
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
      </div>
    );
  }
}

export default Footer;
