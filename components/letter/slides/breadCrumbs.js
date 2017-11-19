const Crumb = ({ onSlideChange, slide, index }) => (
  <a
    onClick={() => {
      onSlideChange(null, index);
    }}
  >
    {slide.label}
  </a>
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
        {" - "}
      </span>
    ))}
  </p>
);

export default BreadCrumbs;
