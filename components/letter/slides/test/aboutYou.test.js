import AboutYou from "../aboutYou";
import expectMatchesSnapshot from "../../../util/expectMatchesSnapshot";

test("about you renders correctly without errors", () => {
  expectMatchesSnapshot(
    <AboutYou name={"George"} zipCode={83702} problems={[]} />
  );
});

test("about you renders correctly with errors", () => {
  expectMatchesSnapshot(
    <AboutYou name={"George"} zipCode={83702} problems={["name"]} />
  );
});
