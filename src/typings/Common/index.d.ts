import { DetailedHTMLProps, HTMLAttributes } from "react";
export * from "./GraphQL";
export * from "./Redux";
export * from "./Context";
export * from "./Notification";
export * from "./Language";
export * from "./Common";
export * from "./Account";
export * from "./Icons";
export * from "./Breadcrumb";

export type ComponentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
