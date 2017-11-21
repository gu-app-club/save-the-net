import { Input } from "../../inputs";
import { PrimaryButton } from "../../ui/buttons";
import styled from "styled-components";

const H2 = styled.h2`
  @media only screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

const AboutYou = props => (
  <div>
    {!props.minimal && <H2>Ready? Lets get some info.</H2>}

    <Input
      name="name"
      type="text"
      placeholder="George Washington"
      onChange={props.onChange}
      label="Name"
      value={props.name}
      problem={props.problems.includes("name")}
    />
    <Input
      name="zipCode"
      type="number"
      placeholder="90210"
      value={props.zipCode}
      label="Zip Code"
      onChange={props.onChange}
      problem={props.problems.includes("zipCode")}
    />
    <div style={{ flexDirection: "row", display: "flex" }}>
      {!props.minimal && (
        <PrimaryButton onClick={props.onNextSlide}> Next </PrimaryButton>
      )}
    </div>
  </div>
);

export default AboutYou;
