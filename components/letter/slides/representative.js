import { PrimaryButton } from "../../ui/buttons";
import BreadCrumbs from "./breadCrumbs";
import styled from "styled-components";
import Card from "../../ui/card";

const ProfilePic = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 100px;

  @media only screen and (min-width: 768px) {
    height: 188px;
    width: 188px;
    border-radius: 200px;
  }
`;

const HR = styled.hr`
  margin-top: 2em;
  border: 1px solid ${props => props.theme.colors.border};
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const RepContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const RepInfoContainer = styled.div`
  margin-top: 5px;
  @media only screen and (min-width: 768px) {
    margin-left: 20%;
    margin-top: 0px;
  }
`;

const RepTitle = styled.h2`margin: 0;`;

const Address = ({ address }) => (
  <div>
    <p>{address.line1}</p>
    <p>{`${address.city}, ${address.state}, ${address.zip}`}</p>
  </div>
);

const Rep = ({ rep, onNextSlide, onRepChoice }) => (
  <Card>
    <RepContainer>
      <ProfilePic src={rep.photoUrl} />

      <RepInfoContainer>
        <RepTitle>{rep.name}</RepTitle>
        <Address address={rep.address[0]} />

        <PrimaryButton
          onClick={() => {
            onRepChoice(rep);
            onNextSlide();
          }}
        >
          Send a letter to {rep.name}!
        </PrimaryButton>
      </RepInfoContainer>
    </RepContainer>
    <HR />
  </Card>
);

const Reps = ({ reps, onNextSlide, onRepChoice }) => {
  if (!reps || reps.length === 0)
    return <p> Loading reps... Hold on a moment! </p>;

  const repEls = reps.map(rep => (
    <Rep rep={rep} onNextSlide={onNextSlide} onRepChoice={onRepChoice} />
  ));

  return <div> {repEls} </div>;
};

const WriteYourLetter = props => (
  <div>
    <h2> Who do you want to send it to? </h2>

    <Reps
      reps={props.reps}
      onNextSlide={props.onNextSlide}
      onRepChoice={props.onRepChoice}
    />
  </div>
);

export default WriteYourLetter;
