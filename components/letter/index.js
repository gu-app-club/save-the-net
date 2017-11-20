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

const Column = Card.extend`
  display: flex;
  flex-direction: column;
  min-width: 600px;
`;

const TextGrouping = styled.div`
  width: 100%;
  margin-bottom: ${props => props.theme.spacing.padding};
`;

const Label = styled.label`
  width: 100%;
  display: flex;
  margin-bottom: ${props => props.theme.spacing.lessPadding};
`;

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
      slide: 0,
      reps: [],
      chosenRep: {},
      complete: false,
      receipt: {}
    };
    this.changeByName = this.changeByName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSlideChange = this.onSlideChange.bind(this);
    this.onNextSlide = this.onNextSlide.bind(this);
    this.onRepChoice = this.onRepChoice.bind(this);
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
        this.setState({ reps: data });
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
          token.id,
          [this.state.chosenRep]
        ).then(({ data, err }) => {
          if (err) {
            this.setState({ err });
            return;
          }
          console.log(data);
          this.setState({ receipt: data, complete: true });
        });
      }
    });
  }

  onSlideChange(event, slide) {
    this.setState({ slide: slide });
  }

  onNextSlide(event) {
    const nextSlide = this.state.slide + 1;
    this.onSlideChange(event, nextSlide);
  }

  onRepChoice(rep) {
    this.setState({ chosenRep: rep });
  }

  render() {
    if (this.state.complete) {
      return (
        <Column>
          <TextGrouping>
            <Label>
              {`Thank you, your letter to ${this.state.chosenRep
                .name} has been sent.`}
            </Label>
            <hr />
            <Label>{`You have been charged $1.50.`}</Label>
          </TextGrouping>
        </Column>
      );
    }
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
          onRepChoice={this.onRepChoice}
          reps={this.state.reps}
        />
      </Elements>
    );
  }
}
