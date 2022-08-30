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
export type LayoutProps = {
  children?: React.ReactNode;
};
export type ChartValueType = {
  x: string;
  y: number;
  name?: string;
};

/**
 * Props for a re-usable gradient area chart
 * color1 is the start color of the gradient
 * color2 is the end color of the gradient
 * id is a unique identifier for the gradient
 */
export type GradientAreaChartProps = {
  data: ChartValueType[];
  color1: string;
  color2: string;
  id: string;
  hideX?: boolean;
};

export interface TableColumn {
  name: string;
  info: string;
}
export type GeneralTableProps = {
  columns: TableColumn[];
  id: string;
  title: string;
  children?: React.ReactNode;
};

export type ComposedBarLineData = {
  x: string;
  line: number;
  bar: number;
}[];

export type ProjectPageProps = {
  title: string;
  description: string;
  url: string;
  tech: TechProjectType[];
};

export type TechProjectType = {
  name: string; // The thing I used
  why: string; // Why I used it
};
