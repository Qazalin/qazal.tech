import { ReactElement } from "react";

export type WorkStoryProps = {
  title: string;
  logo: ReactElement;
  company: string;
  url: string;
  startDate: string;
  endDate: string;
  skills: string[];
  description: string;
};
