import Link from "next/link";
import Head from "../components/head";
import { Letter } from "../components/letter";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import theme from "../theme";
import { StripeProvider } from "react-stripe-elements-universal";

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
  font-size: 1.4em;
  font-weight: 300;
  letter-spacing: 0.01em;
  line-height: 1.4;
}
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const NoCardSection = styled.div`
  padding: ${props => props.theme.spacing.extraPadding};
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
`;

export default () => (
  <ThemeProvider theme={theme}>
    <StripeProvider apiKey="pk_test_YABJKguSbP5XcxnKjZ5JML2D">
      <ContentContainer>
        <NoCardSection>
          <h1>
            On December 14th, the FCC may vote to change the internet forever.
          </h1>

          <p>And not in a good way.</p>

          <p>
            They{"'"}re about to slash net neutrality rules that stop companies
            like Comcast from slowing down your internet, holding apps like
            Netflix at ransom and charging you fees control who gets to say what
            online.
          </p>

          <h2>Want to help stop it?</h2>

          <p>
            Send a letter to your congress person. A real, physical snail-mail
            📬 letter.
          </p>

          <p>
            We've made this easy. For $1.50, you can send in 2 minutes without
            ever leaving your house.
          </p>
        </NoCardSection>

        <Section>
          <Head title="Home" />
          <Letter />
        </Section>
      </ContentContainer>
    </StripeProvider>
  </ThemeProvider>
);
