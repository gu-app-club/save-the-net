/**
 * AHHHHHHH WHAT THE FUCK IF ANYONE CAN GET 
 * THE STYLED JSX TO NOT MAKE ME COPY PASTE PLEASE DO
 */
export const TextArea = props => (
  <label htmlFor={`${props.name}-input`}>
    {props.label || props.name}
    <textarea
      type={props.type || "text"}
      placeholder={props.placeholder}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
      id={`${props.name}-input`}
    />

    <style jsx>{`
      input,
      textarea {
        padding: 1em;
        margin-bottom: 1em;
        margin-top: 0.5em;
        border-radius: 5px;
        border: 1px solid #d3e0e8;
        width: 100%;
        min-width: 250px;
        font-size: 1em;
        font-family: helvetica;
      }
    `}</style>
  </label>
);

export const Input = props => (
  <label htmlFor={`${props.name}-input`}>
    {props.label || props.name}
    <input
      type={props.type || "text"}
      placeholder={props.placeholder}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
      id={`${props.name}-input`}
    />

    <style jsx>{`
      input,
      textarea {
        padding: 1em;
        margin-bottom: 1em;
        margin-top: 0.5em;
        border-radius: 5px;
        border: 1px solid #d3e0e8;
        width: 100%;
        min-width: 250px;
        font-size: 1em;
        font-family: helvetica;
      }
    `}</style>
  </label>
);
