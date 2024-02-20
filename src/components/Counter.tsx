import { ReactNode } from "react";

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

export const Counter = ({ setCount, children }: CounterProps) => {
  return (
    <div>
      <h1>Counter</h1>
      <p>{children}</p>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          //   onClick={() =>
          //     setCount(() => {
          //       if (count !== null && count !== undefined) {
          //         return count + 1;
          //       } else {
          //         setCount(0);
          //       }
          //     })
          //   }
          //   onClick={() => {
          //     if (count === null || count === undefined) {
          //       setCount(() => (count === null ? 0 : null));
          //     } else {
          //       if (count !== null && count !== undefined) {
          //         setCount(() => count + 1);
          //       }
          //     }
          //   }}
        >
          +
        </button>
        <button
          onClick={() => setCount((prev) => prev - 1)}
          //   onClick={() => {
          //     if (count === null || count === undefined) {
          //       setCount(() => (count === null ? 0 : null));
          //     } else {
          //       if (count !== null && count !== undefined) {
          //         setCount(() => count - 1);
          //       }
          //     }
          //   }}
        >
          -
        </button>
      </div>
    </div>
  );
};
