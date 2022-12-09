import { ReactNode } from "react";

interface GenericProps {
  children: ReactNode;
}

interface MenuItemProps {
  icon: JSX.Element;
  text: string;
  link: string;
}

interface CardProps {
  title: any;
  description: string;
  Tags?: Array<string>;
  points: number;
  href: string;
}

export { GenericProps, MenuItemProps, CardProps };
