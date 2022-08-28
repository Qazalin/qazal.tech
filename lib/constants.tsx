import { Layout as TwitterLayout } from "components/content/twitter";
import { Layout as TwitchLayout } from "components/content/twitch";
import { Layout as BlogLayout } from "components/content/blog";
import { Layout as GithubLayout } from "components/content/github";
import { ReactElement } from "react";

export const TWITCH_COLOR = "#8348EE";
export const TWITTER_COLOR = "#4B99E5";
export const SUPPORTED_PLATFORMS = ["twitch", "twitter", "github", "blog"];
export const DESCRIPTIONS: Record<string, string> = {
  twitch: "savour the joy of building something from scratch",
  twitter: "the intelligence network",
  github: "aaand we ship.",
  blog: "strong opinions loosely held",
};
export const LAYOUTS: Record<string, ReactElement> = {
  twitch: <TwitchLayout />,
  twitter: <TwitterLayout />,
  github: <GithubLayout />,
  blog: <BlogLayout />,
};
