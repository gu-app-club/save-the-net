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
import AlertContainer from "react-alert";
import Complete from "./complete";

const TextGrouping = styled.div`
  width: 100%;
  margin-bottom: ${props => props.theme.spacing.padding};
`;

const Label = styled.label`
  width: 100%;
  display: flex;
  margin-bottom: ${props => props.theme.spacing.lessPadding};
`;

const LetterContainer = styled.div`width: 100%;`;

export class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      zipCode: "",
      message:
        "I'm writing to express my disapproval that the FCC is trying to kill net neutrality and the strong Title II oversight of Internet Service Providers. Preserving an open internet is crucial for fair and equal access to the resources and information available on it.",
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

  showAlert(message, type = "error") {
    this.msg.show(message, {
      time: 2000,
      type: type
    });
  }

  changeByName(event) {
    const change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);

    if (event.target.name == "zipCode" && event.target.value.length >= 5) {
      getReps(event.target.value).then(({ data, err }) => {
        if (err) {
          console.log(err);
          this.onSlideChange(null, 0);
          this.showAlert(err);
          this.setState({ reps: [] });
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

    stripe.createToken({ name: this.state.name }).then(({ token, error }) => {
      if (error) {
        this.showAlert(error.message);
        this.setState({ disabledButton: false });

        return;
      }
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
            this.showAlert(err);
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
    let error = false;
    switch (this.state.slide) {
      case 0:
        if (this.state.zipCode.length != 5) {
          this.showAlert("Invalid zipcode.");
          error = true;
        } else {
          getReps(this.state.zipCode).then(({ data, err }) => {
            if (err) {
              this.onSlideChange(null, 0);
              this.showAlert(err);
              this.setState({ reps: [] });
              return;
            }
            this.setState({ reps: data });
          });
        }
        if (this.state.name.length == 0) {
          this.showAlert("Please enter your name.");
          error = true;
        }

        break;
      case 2:
        if (this.state.address.length == 0) {
          this.showAlert("Please enter your address.");
          error = true;
        }
        if (this.state.message.length == 0) {
          this.showAlert(
            "😶 Looks like there's no message! We'll just use the usual one.",
            "info"
          );
        }
    }
    if (error) return;
    const nextSlide = this.state.slide + 1;
    this.onSlideChange(event, nextSlide);
  }

  onRepChoice(rep) {
    this.setState({ chosenRep: rep });
  }

  render() {
    if (this.state.complete) {
      return <Complete chosenRep={this.state.chosenRep} />;
    }
    return (
      <Elements>
        <LetterContainer>
          <AlertContainer
            ref={a => (this.msg = a)}
            offset={14}
            position={"top left"}
            theme={"dark"}
            time={5000}
            transition={"scale"}
          />

          <Slides
            name={this.state.name}
            zipCode={this.state.zipCode}
            message={this.state.message}
            address={this.state.address}
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
        </LetterContainer>
      </Elements>
    );
  }
}
