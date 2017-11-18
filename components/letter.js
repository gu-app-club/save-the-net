import got from "got";

const StatelessLetter = props => (
  <div>
    <input
      type="text"
      placeholder="name"
      value={props.name}
      name="name"
      onChange={props.onChange}
    />
    <input
      type="number"
      placeholder="zip code"
      value={props.zipCode}
      name="zipCode"
      onChange={props.onChange}
    />
    <textarea
      type="text"
      placeholder="Message"
      value={props.message}
      name="message"
      onChange={props.onChange}
    />
    <button onClick={props.onSubmit}> Send Message </button>

    <style jsx>
      {`
        display: flex;
        flex-direction: column;
        margin: 0 auto;
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
    }).then(foo => {
        console.log(foo); //TODO 
    }).catch(console.error)
  }

  render() {
    return (
      <StatelessLetter
        name={this.state.name}
        zipCode={this.state.zipCode}
        message={this.state.message}
        onChange={this.changeByName}
        onSubmit={this.onSubmit}
      />
    );
  }
}
