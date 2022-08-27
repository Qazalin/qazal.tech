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

export interface ContentPreviewProps {
  title: string;
  svgTH: JSX.Element;
}

export interface MediaPreviewProps extends ContentPreviewProps {
  title: string;
  svgTH: JSX.Element;
  platform: "twitch" | "twitter";
}
