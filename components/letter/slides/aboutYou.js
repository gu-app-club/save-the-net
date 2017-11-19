import { Input } from "../../inputs";
import { PrimaryButton } from "../../ui/buttons";
import BreadCrumbs from "./breadCrumbs";

const AboutYou = props => (
  <div>
    <h1>Tell us about you.</h1>
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

    <BreadCrumbs slides={props.slides} onSlideChange={props.onSlideChange} />

    <PrimaryButton onClick={props.onNextSlide}> Next </PrimaryButton>
  </div>
);

export default AboutYou;
