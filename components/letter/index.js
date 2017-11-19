import got from "got";
import { Input, TextArea } from "../inputs";
import { PrimaryButton } from "../ui/buttons";
import styled from "styled-components";
import Card from "../ui/card";
import { sendLetter, getReps } from "../../api";
import {
  injectStripe,
  CardElement,
  Elements
} from "react-stripe-elements-universal";
import AboutYou from "./slides/aboutYou";
import WriteYourLetter from "./slides/writeYourLetter";
import Payment from "./slides/payment";
import Slides from "./slides";

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
      err: "",
      slide: 0
    };
    this.changeByName = this.changeByName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSlideChange = this.onSlideChange.bind(this);
    this.onNextSlide = this.onNextSlide.bind(this);
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

  onSlideChange(event, slide) {
    this.setState({ slide: slide });
  }

  onNextSlide(event) {
    console.log("Hey");
    const nextSlide = this.state.slide + 1;
    this.onSlideChange(event, nextSlide);
  }

  render() {
    return (
      <Elements>
        <Slides
          name={this.state.name}
          zipCode={this.state.zipCode}
          message={this.state.message}
          onChange={this.changeByName}
          onSubmit={this.onSubmit}
          disabled={this.state.disabledButton}
          className="letter"
          problems={this.state.problems}
          slideIndex={this.state.slide}
          onSlideChange={this.onSlideChange}
          onNextSlide={this.onNextSlide}
        />
      </Elements>
    );
  }
}
