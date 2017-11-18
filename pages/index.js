import Link from "next/link";
import Head from "../components/head";
import { Letter } from "../components/letter";

export default () => (
  <div>
    <Head title="Home" />
    <Letter />

    <style jsx global>{`
      body: {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
);
