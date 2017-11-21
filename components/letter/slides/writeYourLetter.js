import { Input, TextArea } from "../../inputs";
import { PrimaryButton, SecondaryButton } from "../../ui/buttons";
import styled from "styled-components";

const H2 = styled.h2`
  @media only screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

const WriteYourLetter = props => (
  <div>
    {!props.minimal && <H2> Let's make your letter. </H2>}
    <Input
      name="address"
      type="text"
      placeholder="1600 Pennsylvania Ave NW, Washington, DC 20500"
      value={props.address}
      label="Your Mailing Address"
      onChange={props.onChange}
      problem={props.problems.includes("address")}
    />
    <TextArea
      type="text"
      placeholder="Please support Net Neutrality..."
      value={props.message}
      name="message"
      label="Message (under 500 chars)"
      onChange={props.onChange}
      problem={props.problems.includes("message")}
    />
    {!props.minimal && (
      <div style={{ flexDirection: "row", display: "flex" }}>
        <PrimaryButton onClick={props.onNextSlide}> Next </PrimaryButton>

        <SecondaryButton
          onClick={() => {
            props.onBackSlide();
          }}
          style={{ marginLeft: "auto" }}
        >
          Back
        </SecondaryButton>
      </div>
    )}
  </div>
);

export default WriteYourLetter;
