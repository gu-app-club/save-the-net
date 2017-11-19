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
    <h1>Let's do this.</h1>

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
      label="Zip Code"
      onChange={props.onChange}
    />

    <Input
      name="address"
      type="text"
      placeholder="1600 Pennsylvania Ave NW, Washington, DC 20500"
      value={props.address}
      label="Address"
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

    <PrimaryButton onClick={props.onSubmit}> Save the Internet! </PrimaryButton>
  </Column>
);

export class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      zipCode: "",
      message: "",
      address: ""
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
    got("/api/send", {
      body: {
        message: this.state.message,
        zip: this.state.zipCode,
        address_line1: this.state.address,
        name: this.state.name
      },
      json: true
    })
      .then(response => {
        console.log(response); //TODO
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
