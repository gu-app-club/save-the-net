import Card from "../ui/card";
import { SecondaryButton } from "../ui/buttons";
import Link from "next/link";
import { generateShareIcon } from "react-share";
const TwitterIcon = generateShareIcon("twitter");

const Column = Card.extend`
  display: flex;
  flex-direction: column;
  margin: auto;
  @media only screen and (min-width: 768px) {
    min-width: 500px;
  }
`;

const twitterUrlExt = encodeURIComponent(
  "Send a letter to your rep supporting net neutrality on savethenet.today"
);

const Complete = props => (
  <Column>
    <div>
      <h1> You did it! </h1>
      <p>
        {`Thank you, your letter to ${
          props.receipt.reps[0].name
        } has been sent.`}
      </p>
      <div
        style={{
          alignContent: "center",
          justifyContent: "center",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center"
        }}
      >
        <a href={props.receipt.urls[0]}>
          <SecondaryButton style={{ textTransform: "none" }}>
            You may view your letter here.
          </SecondaryButton>
        </a>

        <a
          class="twitter-share-button"
          href={`https://twitter.com/intent/tweet?text=${twitterUrlExt}`}
        >
          <SecondaryButton style={{ textTransform: "none" }}>
            🐦 Share on Twitter
          </SecondaryButton>
        </a>
      </div>
    </div>
  </Column>
);

export default Complete;
