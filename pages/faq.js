import { Section, CenteredContainer } from "../components/ui/containers";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import styled from "styled-components";
import Footer from "../components/footer";

const ExtraPaddedContainer = CenteredContainer.extend`
  padding: ${props => props.theme.spacing.extraPadding};
`;

export default () => (
  <ThemeProvider theme={theme}>
    <ExtraPaddedContainer>
      <Section>
        <h1> FAQ </h1>

        <p>
          If you have a question that isn't answered here, or just want to get
          in contact with the creators, feel free to send a direct message to{" "}
          <a href="https://twitter.com/flaqueeau">@flaqueeau</a> on Twitter.{" "}
        </p>

        <h2>Q: Where does the money go?</h2>

        <p>
          Our current expenses are, in order of cost,{" "}
          <a href="https://lob.com/pricing/letters">Lob</a>, the service we use
          to send the letters,{" "}
          <a href="https://stripe.com/us/pricing">Stripe</a>, the service we use
          to collect payments securely, and{" "}
          <a href="https://www.digitalocean.com/pricing/">Digital Ocean</a>, the
          company we host the site with.
        </p>

        <p>
          In each $1.50, we spend about $0.97 on Lob and $0.30 on Stripe. We
          estimated that we would get a minimum of 100 letters per month, so we
          wanted to leave at least $0.20 cents to cover the cost of Digital
          Ocean Hosting (which is about $20 a month).{" "}
        </p>

        <p>
          As we grow, we may be able to reduce costs by getting a bulk plan for
          lob. That should hopefully allow us to reduce the $1.50 cost.{" "}
        </p>

        <p> Below are screen grabs from our Lob and Stripe accounts. </p>

        <img src="https://i.imgur.com/30gibqZ.png" width={"100%"} />

        <img src="https://i.imgur.com/obxgghl.png" width={"100%"} />

        <h2>Q: What happens if there's money left over? </h2>

        <p>
          {" "}
          Our plan is to donate the rest of the money to an organization helping
          to protect internet freedom.{" "}
        </p>

        <h2>Q: Do you pay yourself? </h2>

        <p>
          Nope! This is an entirely volunteer effort. 0 dollars goes to
          ourselves.
        </p>

        <h2>Q: Do you share my information? </h2>

        <p>
          Absolutely not. Not only do we not share your info, we don't even
          store it. All we do is collect your info and share it with Lob and
          Stripe and both of them are reasonably trust worthy.
        </p>

        <p>
          <i> Caveat: </i> While we don't store your info, Stripe and Lob do and
          they share it with us if something goes wrong. For example, if we need
          to give you a refund.
          <i> Caveat to the caveat: </i> Stripe does NOT give us your full
          credit card number. (Although they do give us the last 4 digits).
        </p>

        <h2>Q: Is it secure and safe?</h2>

        <p>
          Probably. We're not gonna lie, nothing on the internet is 100% secure.
          But we've taken steps to be the most secure that we can be:
          <ul>
            <li>
              <b> We don't store anything. </b> Not your address, not your name,
              and certainly not your credit card. Even if we were compromised,
              your data is safe because we don't even have it.
            </li>

            <li>
              <b> We use Stripe for payments. </b> The form where you type your
              card in? That's not us. That's stripe's. When we get your card, it
              goes directly to them. They're record for security is pretty good
              and they power a large portion of the things you buy online.
            </li>

            <li>
              <b> We use HTTPS. </b> See that little green lock in your address
              bar? That's HTTPS. When you send information over the internet
              (like your name and address for example), it's encrypted. That
              means some nefarious ski-mask-wearing dude on unlocked airport
              wifi can't listen in. (Or at least hopefully, again, nothing's
              ever 100% secure).
            </li>
          </ul>
        </p>

        <h2>
          Q: How can I be sure that you're doing what you're saying your doing?
        </h2>

        <p>
          Well, for one thing, we're open source. If you're a techie, you can
          take{" "}
          <a href="https://github.com/gu-app-club/save-the-net">
            {" "}
            a look at the code here
          </a>. But, if you're really concerned about us, feel free to reach out
          to Evan <a href="https://twitter.com/flaqueeau"> on Twitter.</a> We're
          real people, we'd love to talk!
        </p>
      </Section>

      <Footer />
    </ExtraPaddedContainer>
  </ThemeProvider>
);
