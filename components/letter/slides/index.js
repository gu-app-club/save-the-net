import Payment from "./payment";
import AboutYou from "./aboutYou";
import WriteYourLetter from "./writeYourLetter";
import Card from "../../ui/card";
import styled from "styled-components";

const Column = Card.extend`
  display: flex;
  flex-direction: column;
  min-width: 600px;
`;

const ErrText = styled.p`color: ${props => props.theme.colors.danger};`;

const SlideOrders = [
  {
    Component: AboutYou,
    label: "About You"
  },
  {
    Component: WriteYourLetter,
    label: "Write Your Letter"
  },
  {
    Component: Payment,
    label: "Payment"
  }
];

class Slides extends React.Component {
  render() {
    const Component = SlideOrders[this.props.slideIndex].Component;

    return (
      <Column>
        <Component {...this.props} slides={SlideOrders} />
      </Column>
    );
  }
}

export default Slides;
