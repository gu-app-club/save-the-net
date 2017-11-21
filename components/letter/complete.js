import Card from "../ui/card";

const Column = Card.extend`
  display: flex;
  flex-direction: column;
  margin: auto;
  @media only screen and (min-width: 768px) {
    min-width: 500px;
  }
`;

const Complete = props => (
  <Column>
    <div>
      <h1> You did it! </h1>
      <p>
        {`Thank you, your letter to ${props.chosenRep.name} has been sent.`}
      </p>
    </div>
  </Column>
);

export default Complete;
