import got from "got";
import { Input, TextArea } from "./inputs";
import { Primary } from "./buttons";

const StatelessLetter = props => (
  <div>
    <div className="letter">
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

      <Primary onClick={props.onSubmit}> Submit </Primary>
    </div>

    <style jsx>
      {`
        .letter {
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          height: 100%;
          padding: 3em;
          background: white;
          border: 1px solid #d3e0e8;
          border-radius: 5px;
        }

        input,
        textarea {
          padding: 1em;
          margin-bottom: 1em;
          border-radius: 5px;
          border: 1px solid #d3e0e8;
          width: 100%;
          min-width: 250px;
          font-size: 1em;
          font-family: helvetica;
        }

        input::placeholder,
        textarea::placeholder {
          color: #5a6c78;
          font-size: 1em;
        }
      `}
    </style>
  </div>
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
