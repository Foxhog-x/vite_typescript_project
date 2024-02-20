import "./App.css";
import { Heading } from "./components/Heading";
import { Section } from "./components/Section";

function App() {
  return (
    <>
      <Heading title={"Hello"} />
      <Section title="Diffrent Title">This is my section</Section>
    </>
  );
}

export default App;
