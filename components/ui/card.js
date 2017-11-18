import styled from "styled-components";

const Card = styled.div`
  background: ${props => props.theme.colors.secondaryBackground};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius};
  width: ${props => (props.expanded ? "100%" : "initial")};
  padding: ${props => props.theme.spacing.extraPadding};
  margin-bottom: ${props => props.theme.spacing.extraPadding};
  box-sizing: border-box;
  overflow: hidden;
`;

export default Card;
