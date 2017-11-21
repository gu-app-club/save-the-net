import styled from "styled-components";

const Card = styled.div`
  width: ${props => (props.expanded ? "100%" : "initial")};
  margin-bottom: ${props => props.theme.spacing.extraPadding};

  box-sizing: border-box;
  overflow: hidden;
  padding: 0 1em;

  @media only screen and (min-width: 768px) {
    padding: 0 ${props => props.theme.spacing.extraPadding};

    margin-top: ${props => props.theme.spacing.extraPadding};
    padding: ${props => props.theme.spacing.extraPadding};

    background: ${props => props.theme.colors.secondaryBackground};
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius};
  }
`;

export default Card;
