import styled from "styled-components";

const LinkLikeButton = styled.button`
  border: 0;
  background: ${props =>
    props.active
      ? props.theme.colors.lightPrimary
      : props.theme.colors.background};
  cursor: pointer;
  padding: ${props => props.theme.spacing.padding};
  border-radius: ${props => props.theme.borderRadius};
  font-family: ${props => props.theme.font};
  font-size: ${props => props.theme.fontSizes.regular};

  &:hover {
    background: ${props => props.theme.colors.lightPrimary};
  }
`;

const Crumb = ({ onSlideChange, slide, index }) => (
  <LinkLikeButton
    onClick={() => {
      onSlideChange(null, index);
    }}
  >
    {slide.label}
  </LinkLikeButton>
);

const BreadCrumbs = props => (
  <p>
    {props.slides.map((slide, index) => (
      <span>
        <Crumb
          slide={slide}
          index={index}
          onSlideChange={props.onSlideChange}
        />
      </span>
    ))}
  </p>
);

export default BreadCrumbs;
