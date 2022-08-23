import { NFTGo, Thirdwave } from "components/icons";
import { WorkStoryProps } from "types/propTypes";

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
business insights from blockchain`,
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
