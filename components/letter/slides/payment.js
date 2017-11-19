import { injectStripe, CardElement } from "react-stripe-elements-universal";
import { PrimaryButton } from "../../ui/buttons";
import BreadCrumbs from "./breadCrumbs";

const Payment = props => (
  <div>
    <h1>Let's do this.</h1>
    <div
      style={{
        borderRadius: "5px",
        padding: "0px 16px 0px 16px",
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
          base: { fontSize: "18px" }
        }}
      />
    </div>

    <BreadCrumbs slides={props.slides} onSlideChange={props.onSlideChange} />

    <PrimaryButton
      onClick={e => {
        props.onSubmit(e, props.stripe);
      }}
      disabled={props.disabled ? "disabled" : ""}
    >
      {props.disabled ? "Hold on a moment..." : "Save the Internet!"}
    </PrimaryButton>
  </div>
);

export default injectStripe(Payment);
