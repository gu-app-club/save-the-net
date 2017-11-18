export const Primary = props => (
  <button {...props}>
    {props.children}

    <style>{`
    button { 
        border: 0;
        border-radius: 5px;
        display: inline-block;
        text-transform: capitalize;
        line-height: 16px;
        font-size: 14px;
        font-weight: 400;
        text-decoration: none;
        text-align: center;
        white-space: nowrap;
        box-sizing: border-box;
        cursor: pointer;
        padding: 10px 20px;
        transition: 0.2s;
        transition-property: background-color, color, box-shadow, opacity,
          -webkit-box-shadow;

        background: #2980b9;
        color: white;
    }

    button:focus, button:hover, button:active {
        background: #3498db;
    }
    `}</style>
  </button>
);
