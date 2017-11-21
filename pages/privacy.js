import Link from "next/link";
import Head from "../components/head";
import { Letter } from "../components/letter";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import theme from "../theme";
import Footer from "../components/footer";
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
      <Head title="Privacy" />
      <h1>Privacy Policy</h1>

      <p>
        This privacy policy has been compiled to better serve those who are
        concerned with how their 'Personally Identifiable Information' (PII) is
        being used online. PII, as described in US privacy law and information
        security, is information that can be used on its own or with other
        information to identify, contact, or locate a single person, or to
        identify an individual in context. Please read our privacy policy
        carefully to get a clear understanding of how we collect, use, protect
        or otherwise handle your Personally Identifiable Information in
        accordance with our website.&nbsp;
      </p>

      <h3>
        What personal information do we collect from the people that visit?
      </h3>

      <p>
        &nbsp;When ordering our site, as appropriate, you may be asked to enter
        your name, mailing address, credit card information or other details to
        help you with your experience.
      </p>

      <h3>When do we collect information?</h3>

      <p>
        &nbsp;We collect information from you when you place an order or enter
        information on our site.
      </p>

      <h3>How do we use your information?</h3>

      <p>
        Your credit card is instantly and securly tokenized by Stripe.com which
        we then process using our server. After your purchase has processed we
        use Lob.com to deliver your message to your selected representative.
      </p>

      <h3>Do we use 'cookies'?</h3>

      <p>
        Yes. Cookies are small files that a site or its service provider
        transfers to your computer{"'"}s hard drive through your Web browser (if you
        allow) that enables the site's or service provider{"'"}s systems to
        recognize your browser and capture and remember certain information. For
        instance, we use cookies to help us remember and process the items in
        your shopping cart. They are also used to help us understand your
        preferences based on previous or current site activity, which enables us
        to provide you with improved services. We also use cookies to help us
        compile aggregate data about site traffic and site interaction so that
        we can offer better site experiences and tools in the future.
      </p>

      <p>We use cookies to:</p>
      <p>
        &nbsp; &nbsp; &nbsp; • Compile aggregate data about site traffic and
        site interactions in order to offer better site experiences and tools in
        the future. We may also use trusted third-party services that track this
        information on our behalf.
      </p>

      <p>
        You can choose to have your computer warn you each time a cookie is
        being sent, or you can choose to turn off all cookies. You do this
        through your browser settings. Since browser is a little different, look
        at your browser{"'"}s Help Menu to learn the correct way to modify your
        cookies.&nbsp;
      </p>

      <p>
        If you turn cookies off, Some of the features that make your site
        experience more efficient may not function properly.It won{"'"}t affect the
        user{"'"}s experience that make your site experience more efficient and may
        not function properly.
      </p>

      <p>Third-party disclosure</p>

      <h3>Do we disclose the information we collect to Third-Parties?</h3>
      <p>We transfer to outside parties your name and address.</p>

      <p>We engage in this practice because,:</p>
      <p>This information is used to mail selected representatives.</p>
      <p>Personally Identifiable Information.</p>

      <h2>Google</h2>

      <p>
        Google{"'"}s advertising requirements can be summed up by Google{"'"}s
        Advertising Principles. They are put in place to provide a positive
        experience for users.
        https://support.google.com/adwordspolicy/answer/1316548?hl=en&nbsp;
      </p>

      <p>We use Google AdSense Advertising on our website.</p>

      <p>
        Google, as a third-party vendor, uses cookies to serve ads on our site.
        Google{"'"}s use of the DART cookie enables it to serve ads to our users
        based on previous visits to our site and other sites on the Internet.
        Users may opt-out of the use of the DART cookie by visiting the Google
        Ad and Content Network privacy policy.&nbsp;
      </p>

      <p>We have implemented the following:</p>
      <p>&nbsp; &nbsp; &nbsp; • Google Display Network Impression Reporting</p>
      <p>&nbsp; &nbsp; &nbsp; • Demographics and Interests Reporting</p>

      <p>
        We, along with third-party vendors such as Google use first-party
        cookies (such as the Google Analytics cookies) and third-party cookies
        (such as the DoubleClick cookie) or other third-party identifiers
        together to compile data regarding user interactions with ad impressions
        and other ad service functions as they relate to our website.
      </p>

      <h3>Opting out:&nbsp;</h3>
      <p>
        Users can set preferences for how Google advertises to you using the
        Google Ad Settings page. Alternatively, you can opt out by visiting the
        Network Advertising Initiative Opt Out page or by using the Google
        Analytics Opt Out Browser add on.
      </p>

      <h2>California Online Privacy Protection Act</h2>

      <p>
        CalOPPA is the first state law in the nation to require commercial
        websites and online services to post a privacy policy. The law{"'"}s reach
        stretches well beyond California to require any person or company in the
        United States (and conceivably the world) that operates websites
        collecting Personally Identifiable Information from California consumers
        to post a conspicuous privacy policy on its website stating exactly the
        information being collected and those individuals or companies with whom
        it is being shared. - See more at:
        http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf&nbsp;
      </p>

      <p>According to CalOPPA, we agree to the following:&nbsp;</p>
      <p>Users can visit our site anonymously.</p>
      <p>
        Once this privacy policy is created, we will add a link to it on our
        home page or as a minimum, on the first significant page after entering
        our website.&nbsp;
      </p>
      <p>
        Our Privacy Policy link includes the word 'Privacy' and can easily be
        found on the page specified above.
      </p>

      <p>You will be notified of any Privacy Policy changes:</p>
      <p>&nbsp; &nbsp; &nbsp; • On our Privacy Policy Page&nbsp;</p>
      <p>Can change your personal information:</p>
      <p>&nbsp; &nbsp; &nbsp; • By emailing us</p>

      <h3>How does our site handle Do Not Track signals?&nbsp;</h3>
      <p>
        We honor Do Not Track signals and Do Not Track, plant cookies, or use
        advertising when a Do Not Track (DNT) browser mechanism is in place.
      </p>

      <h3>Does our site allow third-party behavioral tracking?&nbsp;</h3>
      <p>
        It{"'"}s also important to note that we allow third-party behavioral
        tracking
      </p>

      <p>COPPA (Children Online Privacy Protection Act)</p>

      <p>
        When it comes to the collection of personal information from children
        under the age of 13 years old, the Children{"'"}s Online Privacy Protection
        Act (COPPA) puts parents in control. The Federal Trade Commission,
        United States' consumer protection agency, enforces the COPPA Rule,
        which spells out what operators of websites and online services must do
        to protect children{"'"}s privacy and safety online.&nbsp;
      </p>

      <p>
        We do not specifically market to children under the age of 13 years old.
      </p>
      <p>
        Do we let third-parties, including ad networks or plug-ins collect PII
        from children under 13?
      </p>

      <h2>Fair Information Practices</h2>

      <p>
        The Fair Information Practices Principles form the backbone of privacy
        law in the United States and the concepts they include have played a
        significant role in the development of data protection laws around the
        globe. Understanding the Fair Information Practice Principles and how
        they should be implemented is critical to comply with the various
        privacy laws that protect personal information.&nbsp;
      </p>

      <p>
        In order to be in line with Fair Information Practices we will take the
        following responsive action, should a data breach occur:
      </p>
      <p>&nbsp; &nbsp; &nbsp; • Within 1 business day</p>
      <p>&nbsp; &nbsp; &nbsp; • We will notify you via letter</p>
      <p>&nbsp; &nbsp; &nbsp; • Within 7 business days</p>

      <p>
        We also agree to the Individual Redress Principle which requires that
        individuals have the right to legally pursue enforceable rights against
        data collectors and processors who fail to adhere to the law. This
        principle requires not only that individuals have enforceable rights
        against data users, but also that individuals have recourse to courts or
        government agencies to investigate and/or prosecute non-compliance by
        data processors.
      </p>
      <Footer />
    </ContentContainer>
  </ThemeProvider>
);
