import { ReactElement } from "react";

type Headingprops = { title: string };

export const Heading = ({ title }: Headingprops): ReactElement => {
  return <h1>{title}</h1>;
};
