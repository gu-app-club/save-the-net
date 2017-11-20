import { Input, TextArea } from "../../inputs";
import { PrimaryButton } from "../../ui/buttons";
import BreadCrumbs from "./breadCrumbs";

const WriteYourLetter = props => (
  <div>
    <h1> Let's make your letter. </h1>
    <Input
      name="address"
      type="text"
      placeholder="1600 Pennsylvania Ave NW, Washington, DC 20500"
      value={props.address}
      label="Address"
      onChange={props.onChange}
      problem={props.problems.includes("address")}
    />
    <TextArea
      type="text"
      placeholder="Please support Net Neutrality..."
      value={props.message}
      name="message"
      label="Message"
      onChange={props.onChange}
      problem={props.problems.includes("message")}
    />

    <BreadCrumbs slides={props.slides} onSlideChange={props.onSlideChange} />

    <PrimaryButton onClick={props.onNextSlide}> Next </PrimaryButton>
  </div>
);

export default WriteYourLetter;