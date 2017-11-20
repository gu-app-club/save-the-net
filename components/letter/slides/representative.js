import { PrimaryButton } from "../../ui/buttons";
import BreadCrumbs from "./breadCrumbs";
import styled from "styled-components";
import Card from "../../ui/card";

const ProfilePic = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 100px;
`;

const RepContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const RepInfoContainer = styled.div`
  margin-left: ${props => props.theme.spacing.padding};
`;

const RepTitle = styled.h2``;

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
    <h1> Who do you want to send it to? </h1>

    <Reps
      reps={props.reps}
      onNextSlide={props.onNextSlide}
      onRepChoice={props.onRepChoice}
    />

    <BreadCrumbs slides={props.slides} onSlideChange={props.onSlideChange} />
  </div>
);

export default WriteYourLetter;
