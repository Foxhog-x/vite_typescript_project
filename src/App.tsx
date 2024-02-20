import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { Heading } from "./components/Heading";
import { Section } from "./components/Section";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Heading title={"Hello"} />
      <Section title="Diffrent Title">This is my section</Section>
      <Counter setCount={setCount}>This is count {count}</Counter>
    </>
  );
}

export default App;
