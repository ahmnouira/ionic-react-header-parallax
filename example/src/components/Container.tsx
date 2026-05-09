import { PropsWithChildren } from "react";
import "./Container.css";

export const Container = ({ children }: PropsWithChildren) => {
  return <div className="container">{children}</div>;
};
