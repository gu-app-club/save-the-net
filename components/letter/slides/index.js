import Payment from "./payment";
import AboutYou from "./aboutYou";
import WriteYourLetter from "./writeYourLetter";
import Card from "../../ui/card";
import styled from "styled-components";
import Representative from "./representative";

const Column = Card.extend`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SlideContainer = styled.div`width: 100%;`;

const ErrText = styled.p`color: ${props => props.theme.colors.danger};`;

const SlideOrders = [
  {
    Component: AboutYou,
    label: "About You"
  },
  {
    Component: Representative,
    label: "Representative"
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
      <SlideContainer>
        <Column>
          <Component {...this.props} slides={SlideOrders} />
        </Column>
      </SlideContainer>
    );
  }
}

export default Slides;
