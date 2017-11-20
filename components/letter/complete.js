import Card from "../ui/card";

const Column = Card.extend`
  display: flex;
  flex-direction: column;
  min-width: 600px;
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
