import Link from "next/link";
import Head from "../components/head";
import { Letter } from "../components/letter";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import theme from "../theme";
import Footer from "../components/footer";
import { StripeProvider } from "react-stripe-elements-universal";

import { SecondaryButton } from "../components/ui/buttons";
import Card from "../components/ui/card";

// Base CSS
injectGlobal`
html,
body,
#__next,
body > div:first-child,
#__next > div:first-child {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background: #fafbfc;
  color: #071721;
  font-family: helvetica;
}

*,
*:after,
*:before {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}
`;

const NoCardSection = styled.div`
  padding: ${props => props.theme.spacing.extraPadding}
    ${props => props.theme.spacing.extraPadding} 0
    ${props => props.theme.spacing.extraPadding};
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 2em;
`;

export default () => (
  <ThemeProvider theme={theme}>
    <ContentContainer>
      <Head title="Contact" />
      <h1>This is us.</h1>
      <p>
        We are the creators of this website. If you notice any incorrect
        information or a bug, please feel free to contact us.{" "}
      </p>
      <Card style={{ marginBottom: "1em" }}>
        <RepContainer>
          <ProfilePic
            src={
              "https://pbs.twimg.com/profile_images/710979749317713923/_-9erdFl_400x400.jpg"
            }
          />

          <RepInfoContainer>
            <RepTitle>{"Evan Conrad"}</RepTitle>
            <a href="https://twitter.com/flaqueEau">
              <SecondaryButton>Twitter</SecondaryButton>
            </a>
            <a href="https://github.com/flaqueb">
              <SecondaryButton>GitHub</SecondaryButton>
            </a>
          </RepInfoContainer>
        </RepContainer>
      </Card>

      <Card style={{ marginBottom: "1em" }}>
        <RepContainer>
          <ProfilePic
            src={
              "https://scontent-sea1-1.cdninstagram.com/t51.2885-19/s200x200/20902085_140800579843949_3634932703524028416_a.jpg"
            }
          />

          <RepInfoContainer>
            <RepTitle>{"Max Chehab"}</RepTitle>
            <a href="https://twitter.com/maxchehab">
              <SecondaryButton>Twitter</SecondaryButton>
            </a>
            <a href="https://github.com/maxchehab">
              <SecondaryButton>GitHub</SecondaryButton>
            </a>
          </RepInfoContainer>
        </RepContainer>
      </Card>
      <Footer />
    </ContentContainer>
  </ThemeProvider>
);

const ProfilePic = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 100px;
`;

const RepContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const RepInfoContainer = styled.div`
  margin-left: 20%;
  margin-top: 0px;
`;

const RepTitle = styled.h2`margin: 0;`;
