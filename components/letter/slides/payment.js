import { injectStripe, CardElement } from "react-stripe-elements-universal";
import { PrimaryButton, SecondaryButton } from "../../ui/buttons";
import AboutYou from "./aboutYou";
import WriteYourLetter from "./writeYourLetter";
import styled from "styled-components";

const HR = styled.hr`border: 1px solid ${props => props.theme.colors.border};`;
const H2 = styled.h2`
  @media only screen and (min-width: 768px) {
    margin-top: 0;
  }
`;
const Payment = props => (
  <div>
    <H2>Here's a Recap: </H2>

    <AboutYou {...props} minimal />

    <WriteYourLetter {...props} minimal />

    <HR />

    <h2> Let's do this. </h2>

    <div
      style={{
        borderRadius: "5px",
        padding: "0px 7px",
        height: "40px",
        backgroundColor: "white",
        color: "#071721",
        borderWidth: "1px",
        lineHeight: "24px",
        borderStyle: "solid",
        borderColor: "#D3E0E8",
        borderImage: "initial",
        transition: "all 150ms cubic-bezier(0.4,0,0.2,1)",
        fontSize: "14px",
        boxSizing: "border-box",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: "20px"
      }}
    >
      <CardElement
        style={{
          base: { fontSize: "1.1em" }
        }}
      />
    </div>

    <div style={{ flexDirection: "row", display: "flex" }}>
      {!props.minimal && (
        <PrimaryButton
          onClick={e => {
            props.onSubmit(e, props.stripe);
          }}
          disabled={props.disabled ? "disabled" : ""}
        >
          {props.disabled ? "Hold on a moment..." : "Save the Internet!"}
        </PrimaryButton>
      )}
      <SecondaryButton
        onClick={() => {
          props.onBackSlide();
        }}
        style={{
          display: props.disabled ? "none" : "block",
          marginLeft: "auto"
        }}
      >
        Back
      </SecondaryButton>
    </div>
  </div>
);

export default injectStripe(Payment);
