import Link from "next/link";
import Head from "../components/head";
import { Letter } from "../components/letter";

export default () => (
  <div className="centered">
    <Head title="Home" />
    <Letter />

    <style jsx global>
      {`
        html,
        body,
        #__next,
        body > div:first-child,
        #__next > div:first-child {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
          background: #fafbfc;
          color: #071721;
          font-family: helvetica;
        }

        .centered {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 100%;
        }

        *,
        *:after,
        *:before {
          box-sizing: inherit;
        }

        html {
          box-sizing: border-box;
        }
      `}
    </style>
  </div>
);
