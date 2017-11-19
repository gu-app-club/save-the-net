import got from "got";
import { Input, TextArea } from "./inputs";
import { PrimaryButton } from "./ui/buttons";
import styled from "styled-components";
import Card from "./ui/card";
import { sendLetter } from "../api";

const Column = Card.extend`
  display: flex;
  flex-direction: column;
  min-width: 600px;
`;

const ErrText = styled.p`color: ${props => props.theme.colors.danger};`;

const StatelessLetter = props => (
  <Column>
    <h1>Let's do this.</h1>

    <Input
      name="name"
      type="text"
      placeholder="George Washington"
      onChange={props.onChange}
      label="Name"
      value={props.name}
      problem={props.problems.includes("name")}
    />

    <Input
      name="zipCode"
      type="number"
      placeholder="90210"
      value={props.zipCode}
      label="Zip Code"
      onChange={props.onChange}
      problem={props.problems.includes("zipCode")}
    />

    <Input
      name="address"
      type="text"
      placeholder="1600 Pennsylvania Ave NW, Washington, DC 20500"
      value={props.address}
      label="Address"
      onChange={props.onChange}
      problem={props.problems.includes("address")}
    />

    <TextArea
      type="text"
      placeholder="Please support Net Neutrality..."
      value={props.message}
      name="message"
      label="Message"
      onChange={props.onChange}
      problem={props.problems.includes("message")}
    />

    <PrimaryButton
      onClick={props.onSubmit}
      disabled={props.disabled ? "disabled" : ""}
    >
      {props.disabled ? "Hold on a moment..." : "Save the Internet!"}
    </PrimaryButton>

    {props.err && <ErrText> {props.err} </ErrText>}
  </Column>
);

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
  }

  onSubmit(event) {
    this.setState({
      disabledButton: true
    });

    sendLetter(
      this.state.message,
      this.state.zipCode,
      this.state.address,
      this.state.name
    ).then(({ data, err }) => {
      if (err) {
        this.setState({ err });
        return;
      }
    });
  }

  render() {
    return (
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
    );
  }
}
