import { NFTGo, Thirdwave } from "components/icons";
import { ContentProps, WorkStoryProps } from "types/propTypes";

export const workStory: WorkStoryProps[] = [
  {
    title: "Data engineer",
    logo: <Thirdwave />,
    url: "https://thirdwavelabs.com/",
    company: "Thirdwave",
    startDate: "June 2022",
    endDate: "P",
    skills: ["Python", "Blockchain", "Airflow", "Golang", "NextJs"],
    description: `
        I curated the best technologies that 
allowed me to move fast and ship features.
At Thirdwave, I built a full-stack data analytics
solution that allowed game developers to extract
business insights from the blockchain.`,
  },
  {
    title: "Data analyst",
    logo: <NFTGo />,
    url: "https://nftgo.io",
    company: "NFTGo",
    startDate: "Oct 2021",
    endDate: "Jul 2022",
    skills: [
      "Python",
      "Research",
      "NFTs",
      "Data visualization",
      "content creation",
    ],
    description: `
        At NFTGo, I got my first taste of the wild west of
Crypto at the heart of the NFT mania. I experienced
what it's like to be in fast-growth environment. I upgraded
my skills and grew with the startup. From content creation
to writing code for dashboards and new product features,
all of my efforts were centered around adding max value
to the users.`,
  },
];

const SVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="224.685"
      height="141.264"
      filter="invert(100%) hue-rotate(180deg)" // pro tip: delete this for light mode
      viewBox="0 0 74.895 47.088"
    >
      <path fill="#fff" d="M0 0H74.895V47.088H0z"></path>
      <path
        fill="none"
        fillOpacity="0.8"
        stroke="#000"
        strokeLinecap="round"
        strokeOpacity="0.8"
        d="M0 0c4.42-2.63 22.08-13.16 26.49-15.79M0 0c4.42-2.63 22.08-13.16 26.49-15.79"
        transform="translate(17.165 28.286)"
      ></path>
      <text
        y="2.08"
        fillOpacity="0.8"
        strokeOpacity="0.8"
        fontFamily="Virgil, Segoe UI Emoji"
        fontSize="2.413"
        style={{ whiteSpace: "pre" }}
        transform="translate(12.191 26.945)"
      >
        idea
      </text>
      <text
        y="2.08"
        fillOpacity="0.8"
        strokeOpacity="0.8"
        fontFamily="Virgil, Segoe UI Emoji"
        fontSize="2.413"
        style={{ whiteSpace: "pre" }}
        transform="translate(44.286 10)"
      >
        ship
      </text>
      <path
        fill="none"
        fillOpacity="0.8"
        stroke="#000"
        strokeLinecap="round"
        strokeOpacity="0.8"
        d="M0 0c.78-.02 3.85.4 4.68-.09.83-.49.98-2.46.31-2.85-.68-.39-4.1-.39-4.35.5S2.18 1.72 3.51 2.4c1.32.69 3.64-.2 5.09-.72 1.44-.53 3.49-1.39 3.59-2.41.1-1.02-2.78-4.13-3-3.71-.21.43.26 6.4 1.7 6.25 1.45-.16 6.38-5.58 6.98-7.17.6-1.6-2.83-1.23-3.37-2.39-.53-1.16-1.03-4.45.15-4.57 1.18-.13 7.31 2.75 6.94 3.81-.36 1.07-8.92 3.67-9.11 2.57-.19-1.11 5.94-7.62 7.99-9.19 2.05-1.57 3.34-.1 4.3-.23.97-.12 1.26-.43 1.51-.51M0 0c.78-.02 3.85.4 4.68-.09.83-.49.98-2.46.31-2.85-.68-.39-4.1-.39-4.35.5S2.18 1.72 3.51 2.4c1.32.69 3.64-.2 5.09-.72 1.44-.53 3.49-1.39 3.59-2.41.1-1.02-2.78-4.13-3-3.71-.21.43.26 6.4 1.7 6.25 1.45-.16 6.38-5.58 6.98-7.17.6-1.6-2.83-1.23-3.37-2.39-.53-1.16-1.03-4.45.15-4.57 1.18-.13 7.31 2.75 6.94 3.81-.36 1.07-8.92 3.67-9.11 2.57-.19-1.11 5.94-7.62 7.99-9.19 2.05-1.57 3.34-.1 4.3-.23.97-.12 1.26-.43 1.51-.51"
        transform="translate(32.946 32.478)"
      ></path>
      <text
        y="2.549"
        fillOpacity="0.8"
        strokeOpacity="0.8"
        fontFamily="Virgil, Segoe UI Emoji"
        fontSize="2.839"
        style={{ whiteSpace: "pre" }}
        transform="translate(26.447 30.648)"
      >
        idea
      </text>
      <text
        y="2.593"
        fillOpacity="0.8"
        strokeOpacity="0.8"
        fontFamily="Virgil, Segoe UI Emoji"
        fontSize="2.839"
        style={{ whiteSpace: "pre" }}
        transform="translate(59.762 13.77)"
      >
        ship
      </text>
      <text
        y="4.133"
        fillOpacity="0.8"
        strokeOpacity="0.8"
        fontFamily="Virgil, Segoe UI Emoji"
        fontSize="4.106"
        style={{ whiteSpace: "pre" }}
        transform="translate(10 30.716)"
      >
        plan
      </text>
      <text
        y="4.133"
        fillOpacity="0.8"
        strokeOpacity="0.8"
        fontFamily="Virgil, Segoe UI Emoji"
        fontSize="4.106"
        style={{ whiteSpace: "pre" }}
        transform="translate(47.538 31.955)"
      >
        reality
      </text>
    </svg>
  );
};

export const BlogPrevPop: ContentProps = {
  title: "Planning with perfection",
  svgTH: <SVG />,
};
