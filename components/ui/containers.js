import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CenteredContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.padding};
`;
