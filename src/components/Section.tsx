import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};

export const Section = ({ title = "subheading", children }: SectionProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
};
