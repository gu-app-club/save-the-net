/**
 * We need to wrap Letter with Stripes injector like:
 * `export injectStripe(Letter)`
 * React throws an `Cannot read property 'toLowerCase' of undefined`
 * -max
 */

import got from "got";
import { Input, TextArea } from "./inputs";
import { PrimaryButton } from "./ui/buttons";
import styled from "styled-components";
import Card from "./ui/card";
import { sendLetter, getReps } from "../api";
import {
  injectStripe,
  CardElement,
  Elements
} from "react-stripe-elements-universal";

const Column = Card.extend`
  display: flex;
  flex-direction: column;
  min-width: 600px;
`;

const ErrText = styled.p`color: ${props => props.theme.colors.danger};`;

class _StatelessLetter extends React.Component {
  handleSubmit = ev => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.

    // However, this line of code will do the same thing:
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
  };

  render() {
    return (
      <Column>
        <h1>Let's do this.</h1>
        <Input
          name="name"
          type="text"
          placeholder="George Washington"
          onChange={this.props.onChange}
          label="Name"
          value={this.props.name}
          problem={this.props.problems.includes("name")}
        />
        <Input
          name="zipCode"
          type="number"
          placeholder="90210"
          value={this.props.zipCode}
          label="Zip Code"
          onChange={this.props.onChange}
          problem={this.props.problems.includes("zipCode")}
        />
        <Input
          name="address"
          type="text"
          placeholder="1600 Pennsylvania Ave NW, Washington, DC 20500"
          value={this.props.address}
          label="Address"
          onChange={this.props.onChange}
          problem={this.props.problems.includes("address")}
        />
        <TextArea
          type="text"
          placeholder="Please support Net Neutrality..."
          value={this.props.message}
          name="message"
          label="Message"
          onChange={this.props.onChange}
          problem={this.props.problems.includes("message")}
        />
        <div
          style={{
            borderRadius: "5px",
            padding: "0px 16px 0px 16px",
            height: "40px",
            backgroundColor: "white",
            color: "#071721",
            borderWidth: "1px",
            lineHeight: "24px",
            borderStyle: "solid",
            borderColor: "#D3E0E8",
            borderImage: "initial",
            transition: "all 150ms cubic-bezier(0.4,0,0.2,1)",
            fontSize: "14px",
            boxSizing: "border-box",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: "20px"
          }}
        >
          <CardElement
            style={{
              base: { fontSize: "18px" }
            }}
          />
        </div>
        <PrimaryButton
          onClick={e => {
            this.props.onSubmit(e, this.props.stripe);
          }}
          disabled={this.props.disabled ? "disabled" : ""}
        >
          {this.props.disabled ? "Hold on a moment..." : "Save the Internet!"}
        </PrimaryButton>
        {this.props.err && <ErrText> {this.props.err} </ErrText>}
      </Column>
    );
  }
}

// Make sure we can use stripe
const StatelessLetter = injectStripe(_StatelessLetter);

export class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      zipCode: "",
      message: "",
      address: "",
      disabledButton: false,
      problems: [],
      err: ""
    };
    this.changeByName = this.changeByName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeByName(event) {
    const change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);

    if (event.target.name == "zipCode" && event.target.value.length >= 5) {
      getReps(event.target.value).then(({ data, err }) => {
        if (err) {
          this.setState({ err });
          return;
        }
        console.log(data);
      });
    }
  }

  onSubmit(event, stripe) {
    this.setState({
      disabledButton: true
    });

    stripe.createToken({ name: this.state.name }).then(({ token }) => {
      if (token) {
        console.log("Received Stripe token:", token);
        sendLetter(
          this.state.message,
          this.state.zipCode,
          this.state.address,
          this.state.name,
          token.id
        ).then(({ data, err }) => {
          if (err) {
            this.setState({ err });
            return;
          }
        });
      }
    });
  }

  render() {
    return (
      <Elements>
        <StatelessLetter
          name={this.state.name}
          zipCode={this.state.zipCode}
          message={this.state.message}
          onChange={this.changeByName}
          onSubmit={this.onSubmit}
          disabled={this.state.disabledButton}
          className="letter"
          problems={this.state.problems}
        />
      </Elements>
    );
  }
}
