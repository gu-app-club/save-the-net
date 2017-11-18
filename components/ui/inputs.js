import styled from "styled-components";

export const Input = styled.input`
  border-radius: 5px;
  padding: 0px 16px 0px 16px;
  height: 40px;
  background-color: ${props => props.theme.colors.secondaryBackground};
  color: ${props => props.theme.colors.text};
  border-width: 1px;
  line-height: 24px;
  border-style: solid;
  border-color: ${props => props.theme.colors.border};
  border-image: initial;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: ${props => props.theme.fontSizes.regular};
  box-sizing: border-box;
  width: 100%;
`;

export const TextArea = styled.textarea`
  border-radius: 5px;
  padding: 0px 16px 0px 16px;
  height: 40px;
  background-color: ${props => props.theme.colors.secondaryBackground};
  color: ${props => props.theme.colors.text};
  border-width: 1px;
  line-height: 24px;
  border-style: solid;
  border-color: ${props => props.theme.colors.border};
  border-image: initial;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: ${props => props.theme.fontSizes.regular};
  box-sizing: border-box;
  width: 100%;
`;
