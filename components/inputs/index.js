import { Input as InputUI, TextArea as TextAreaUI } from "../ui/inputs";
import styled from "styled-components";

const Label = styled.label`
  width: 100%;
  display: flex;
  margin-bottom: ${props => props.theme.spacing.lessPadding};
`;

const TextGrouping = styled.div`
  width: 100%;
  margin-bottom: ${props => props.theme.spacing.padding};
`;

export const TextArea = props => (
  <TextGrouping>
    <Label htmlFor={`${props.name}-input`}>{props.label || props.name}</Label>
    <TextAreaUI
      type={props.type || "text"}
      placeholder={props.placeholder}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
      id={`${props.name}-input`}
    />
  </TextGrouping>
);

export const Input = props => (
  <TextGrouping>
    <Label htmlFor={`${props.name}-input`}>{props.label || props.name} </Label>
    <InputUI
      type={props.type || "text"}
      placeholder={props.placeholder}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
      id={`${props.name}-input`}
    />
  </TextGrouping>
);
