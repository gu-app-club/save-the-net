import Payment from "./payment";
import AboutYou from "./aboutYou";
import WriteYourLetter from "./writeYourLetter";
import Card from "../../ui/card";
import styled from "styled-components";
import Representative from "./representative";
import BreadCrumbs from "./breadCrumbs";

const Column = Card.extend`
  display: flex;
  flex-direction: column;
  min-width: 600px;
`;

const AtBottom = styled.div`
  position: absolute;
  bottom: ${props => props.theme.spacing.padding};
`;

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
      <div>
        <Column>
          <Component {...this.props} slides={SlideOrders} />
        </Column>
        <AtBottom>
          <BreadCrumbs
            slides={SlideOrders}
            onSlideChange={this.props.onSlideChange}
            maxSlide={this.props.slideIndex}
          />
        </AtBottom>
      </div>
    );
  }
}

export default Slides;
