import Link from "next/link";
import Head from "../components/head";
import { Letter } from "../components/letter";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import theme from "../theme";
import { StripeProvider } from "react-stripe-elements-universal";
import { Section, CenteredContainer } from "../components/ui/containers";
import Footer from "../components/footer";
import constants from "../constants";

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
  font-size: 1.3em;
  font-weight: 300;
  letter-spacing: 0.01em;
  line-height: 1.3;
}
`;

const H1 = styled.h1`
  @media only screen and (max-width: 768px) {
    font-size: 1.7em;
    margin-top: 0;
  }
`;

const SectionWithPadding = Section.extend`
  padding: ${props => props.theme.spacing.padding};
`;

const NoCardSection = styled.div`
  padding: ${props => props.theme.spacing.extraPadding}
    ${props => props.theme.spacing.extraPadding} 0
    ${props => props.theme.spacing.extraPadding};
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: true
    };
    this.changeShowInfo = this._changeShowInfo.bind(this);
  }

  _changeShowInfo(value) {
    this.setState({ showInfo: value });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StripeProvider apiKey={constants.STRIPE_PUBLIC_KEY}>
          <CenteredContainer>
            {this.state.showInfo == true && (
              <NoCardSection>
                <H1>
                  On December 14th, the FCC may vote to change the internet
                  forever.
                </H1>

                <p>And not in a good way.</p>

                <p>
                  They{"'"}re about to slash net neutrality rules that stop
                  companies like Comcast from slowing down your internet,
                  holding apps like Netflix and Youtube at ransom and charging
                  you fees to control who gets to say what online.
                </p>

                <p>
                  Send a letter to your congress person. A real, physical
                  snail-mail 📬 letter.
                </p>

                <p>
                  We{"'"}ve made this easy. For $1.50, you can send a letter in
                  2 minutes without ever leaving your house.
                </p>
              </NoCardSection>
            )}
            <SectionWithPadding>
              <Head title="Save the Net" />
              <Letter changeShowInfo={this.changeShowInfo} />
              <Footer />
            </SectionWithPadding>
          </CenteredContainer>
        </StripeProvider>
      </ThemeProvider>
    );
  }
}
