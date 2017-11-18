import got from "got";
import { Input, TextArea } from "./inputs";
import { PrimaryButton } from "./ui/buttons";
import styled from "styled-components";
import Card from "./ui/card";

const Column = Card.extend`
  display: flex;
  flex-direction: column;
  min-width: 600px;
`;

const StatelessLetter = props => (
  <Column>
    <Input
      name="name"
      type="text"
      placeholder="George Washington"
      onChange={props.onChange}
      label="Name"
      value={props.name}
    />

    <Input
      name="zipCode"
      type="number"
      placeholder="90210"
      value={props.zipCode}
      name="zipCode"
      label="Zip Code"
      onChange={props.onChange}
    />

    <TextArea
      type="text"
      placeholder="Please support Net Neutrality..."
      value={props.message}
      name="message"
      label="Message"
      onChange={props.onChange}
    />

    <PrimaryButton onClick={props.onSubmit}> Submit </PrimaryButton>
  </Column>
);

export class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      zipCode: "",
      message: ""
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
    got("/send", {
      body: {
        message: this.state.message,
        zip: this.state.zipCode,
        name: this.state.name
      },
      json: true
    })
      .then(foo => {
        console.log(foo); //TODO
      })
      .catch(console.error);
  }

  render() {
    return (
      <StatelessLetter
        name={this.state.name}
        zipCode={this.state.zipCode}
        message={this.state.message}
        onChange={this.changeByName}
        onSubmit={this.onSubmit}
        className="letter"
      />
    );
  }
}
