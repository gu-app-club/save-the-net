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
}
`;

const Centered = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <ThemeProvider theme={theme}>
    <StripeProvider apiKey="pk_test_YABJKguSbP5XcxnKjZ5JML2D">
      <ContentContainer>
        <Centered>
          <Head title="Home" />
          <Letter />
        </Centered>
      </ContentContainer>
    </StripeProvider>
  </ThemeProvider>
);
