import { NFTGo, Thirdwave } from "components/icons";
import {
  ContentPreviewProps,
  MediaPreviewProps,
  ProjectPageProps,
  WorkStoryProps,
} from "types/propTypes";

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
const GQL = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="c-PJLV c-PJLV-gtBzxi-size-md"
    viewBox="0 0 400 71"
  >
    <path
      fill="currentColor"
      d="M129.988 25.7c-.715-2.511-2.041-4.474-3.977-5.886-1.919-1.43-4.335-2.146-7.248-2.146-4.099 0-7.422 1.518-9.968 4.553-2.53 3.017-3.794 7.317-3.794 12.899 0 5.6 1.247 9.925 3.741 12.977 2.495 3.053 5.87 4.58 10.126 4.58 3.768 0 6.724-.978 8.87-2.931 2.163-1.971 3.279-4.614 3.349-7.928h-11.513v-8.53h22.423v6.75c0 4.693-.994 8.74-2.982 12.141-1.989 3.384-4.727 5.983-8.216 7.797-3.471 1.814-7.466 2.721-11.983 2.721-5.024 0-9.437-1.107-13.24-3.323-3.802-2.232-6.767-5.398-8.896-9.497-2.11-4.117-3.166-9.001-3.166-14.653 0-5.79 1.108-10.744 3.323-14.861 2.216-4.117 5.216-7.265 9.001-9.445 3.785-2.18 8.033-3.271 12.742-3.271 4.047 0 7.71.768 10.989 2.303 3.28 1.535 5.966 3.663 8.059 6.384 2.093 2.703 3.384 5.826 3.872 9.367h-11.512zm17.363 36.265v-40.19h10.806v7.013h.419c.732-2.494 1.962-4.378 3.689-5.652 1.727-1.29 3.715-1.936 5.965-1.936a15.1 15.1 0 013.506.393v9.89c-.523-.175-1.247-.314-2.171-.419a19.487 19.487 0 00-2.538-.183c-2.46 0-4.501.776-6.123 2.329-1.605 1.535-2.407 3.54-2.407 6.018v22.737h-11.146zm37.51.759c-3.838 0-7.021-1.003-9.55-3.01-2.53-2.005-3.794-4.997-3.794-8.974 0-3 .706-5.355 2.119-7.064 1.413-1.71 3.262-2.957 5.547-3.742 2.303-.802 4.779-1.325 7.431-1.57 3.488-.349 5.983-.715 7.483-1.099 1.5-.383 2.25-1.22 2.25-2.511v-.157c0-1.658-.523-2.94-1.57-3.847-1.029-.907-2.494-1.36-4.396-1.36-2.005 0-3.602.436-4.787 1.308-1.187.872-1.972 1.98-2.355 3.323l-10.309-.837c.767-3.663 2.669-6.568 5.704-8.713 3.052-2.146 6.986-3.218 11.8-3.218 2.982 0 5.773.47 8.372 1.413 2.6.941 4.693 2.415 6.28 4.421 1.605 1.989 2.407 4.58 2.407 7.771v27.107h-10.57V56.39h-.314c-.977 1.867-2.442 3.393-4.396 4.58-1.936 1.168-4.387 1.753-7.352 1.753zm3.192-7.693c2.442 0 4.448-.706 6.018-2.12 1.57-1.43 2.355-3.2 2.355-5.31v-4.265c-.437.296-1.117.558-2.041.784-.907.227-1.884.428-2.931.602a864.26 864.26 0 01-2.773.419c-1.954.279-3.532.828-4.736 1.648-1.186.82-1.779 2.015-1.779 3.585 0 1.535.549 2.695 1.648 3.48 1.117.785 2.53 1.177 4.239 1.177zm46.752-33.255v8.372h-7.98v31.817h-11.146V30.148h-5.678v-8.372h5.678v-2.904c0-4.379 1.247-7.64 3.742-9.786 2.511-2.145 5.66-3.218 9.445-3.218 1.709 0 3.27.13 4.683.392 1.431.262 2.495.497 3.192.707l-1.962 8.372a13.84 13.84 0 00-1.622-.392 10.55 10.55 0 00-1.962-.183c-1.64 0-2.783.384-3.428 1.151-.628.75-.942 1.805-.942 3.166v2.695h7.98zm4.072 40.189V8.38h11.146v20.146h.34c.506-1.099 1.221-2.206 2.146-3.323.924-1.116 2.145-2.05 3.662-2.8 1.518-.767 3.393-1.15 5.626-1.15 2.948 0 5.652.767 8.111 2.302 2.459 1.518 4.431 3.811 5.913 6.881 1.5 3.053 2.25 6.882 2.25 11.487 0 4.483-.724 8.268-2.171 11.355-1.448 3.07-3.402 5.399-5.861 6.986-2.46 1.57-5.216 2.355-8.268 2.355-2.163 0-4.003-.358-5.521-1.073-1.5-.715-2.73-1.613-3.689-2.695-.942-1.099-1.675-2.207-2.198-3.323h-.497v6.437h-10.989zm10.91-20.095c0 3.576.733 6.454 2.198 8.635 1.483 2.163 3.567 3.244 6.254 3.244 2.738 0 4.831-1.099 6.279-3.297 1.448-2.215 2.172-5.075 2.172-8.582 0-3.488-.724-6.314-2.172-8.477-1.43-2.18-3.523-3.27-6.279-3.27-2.704 0-4.789 1.063-6.254 3.191-1.465 2.111-2.198 4.963-2.198 8.556zm44.234 20.854c-3.837 0-7.02-1.003-9.55-3.01-2.529-2.005-3.793-4.997-3.793-8.974 0-3 .706-5.355 2.119-7.064 1.413-1.71 3.262-2.957 5.547-3.742 2.302-.802 4.779-1.325 7.43-1.57 3.488-.349 5.985-.715 7.485-1.099 1.5-.383 2.25-1.22 2.25-2.511v-.157c0-1.658-.524-2.94-1.571-3.847-1.029-.907-2.494-1.36-4.397-1.36-2.006 0-3.6.436-4.788 1.308-1.185.872-1.97 1.98-2.354 3.323l-10.308-.837c.767-3.663 2.668-6.568 5.703-8.713 3.053-2.146 6.985-3.218 11.8-3.218 2.982 0 5.774.47 8.374 1.413 2.6.941 4.691 2.415 6.279 4.421 1.606 1.989 2.406 4.58 2.406 7.771v27.107h-10.571V56.39h-.311c-.98 1.867-2.445 3.393-4.397 4.58-1.936 1.168-4.386 1.753-7.353 1.753zm3.194-7.693c2.441 0 4.447-.706 6.017-2.12 1.568-1.43 2.353-3.2 2.353-5.31v-4.265c-.435.296-1.114.558-2.041.784a37.55 37.55 0 01-2.929.602c-1.03.157-1.953.297-2.774.419-1.953.279-3.532.828-4.735 1.648-1.186.82-1.78 2.015-1.78 3.585 0 1.535.55 2.695 1.649 3.48 1.116.785 2.528 1.177 4.24 1.177zm58.576-21.795l-10.203.628c-.279-1.29-.985-2.398-2.12-3.323-1.133-.925-2.668-1.387-4.603-1.387-1.727 0-3.194.367-4.397 1.1-1.186.714-1.771 1.674-1.753 2.877-.018.96.359 1.77 1.126 2.434.785.662 2.109 1.194 3.977 1.596l7.273 1.465c7.727 1.587 11.6 5.216 11.618 10.884 0 2.634-.777 4.946-2.33 6.934-1.535 1.988-3.644 3.541-6.332 4.657-2.685 1.1-5.765 1.649-9.235 1.649-5.321 0-9.559-1.108-12.715-3.323-3.159-2.233-5-5.268-5.523-9.105l10.964-.576c.347 1.64 1.15 2.878 2.406 3.715 1.274.837 2.906 1.256 4.894 1.256 1.953 0 3.524-.384 4.709-1.151 1.203-.768 1.815-1.745 1.832-2.93-.053-1.99-1.77-3.323-5.155-4.004l-6.959-1.386c-7.78-1.553-11.653-5.382-11.618-11.487-.018-3.872 1.527-6.925 4.632-9.157 3.121-2.233 7.256-3.35 12.4-3.35 5.077 0 9.071 1.073 11.986 3.219 2.929 2.145 4.638 5.067 5.126 8.765zm23.303 29.514c-4.115 0-7.665-.838-10.647-2.512-2.985-1.692-5.276-4.082-6.882-7.17-1.606-3.104-2.406-6.776-2.406-11.014 0-4.135.8-7.763 2.406-10.885s3.864-5.556 6.776-7.3c2.93-1.744 6.368-2.616 10.309-2.616 3.541 0 6.732.75 9.576 2.25 2.862 1.5 5.13 3.767 6.803 6.803 1.674 3.017 2.512 6.802 2.512 11.355v3.061h-27.367v.026c0 3 .817 5.364 2.458 7.091 1.639 1.727 3.856 2.59 6.647 2.59 1.865 0 3.48-.392 4.839-1.177 1.361-.785 2.32-1.945 2.879-3.48l10.309.68c-.785 3.733-2.774 6.716-5.965 8.949-3.194 2.232-7.276 3.349-12.247 3.349zm-8.92-24.935h16.876c-.018-2.39-.785-4.36-2.303-5.913-1.518-1.553-3.488-2.33-5.915-2.33-2.476 0-4.508.803-6.094 2.408-1.588 1.605-2.444 3.55-2.564 5.835z"
    ></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M37.792 1.541a2.786 2.786 0 01-1.246 3.739L9.018 19.044l26.316 13.158 26.311-13.156-10.053-5.016-15.03 7.507a2.787 2.787 0 11-2.49-4.986l16.274-8.129a2.786 2.786 0 012.489 0l16.291 8.128a2.787 2.787 0 01.002 4.986L36.616 37.792c-.412.206-.85.3-1.28.295a2.78 2.78 0 01-1.283-.294L1.54 21.536a2.787 2.787 0 010-4.985L34.053.295a2.787 2.787 0 013.739 1.246zM.338 50.299a2.787 2.787 0 013.739-1.247l31.266 15.634 31.266-15.634a2.787 2.787 0 012.493 4.986L36.589 70.294a2.786 2.786 0 01-2.492 0L1.584 54.038a2.787 2.787 0 01-1.246-3.74z"
      clipRule="evenodd"
    ></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M.338 34.041a2.787 2.787 0 013.739-1.246l31.266 15.633 31.266-15.633a2.787 2.787 0 012.493 4.985L36.589 54.036a2.789 2.789 0 01-2.492 0L1.584 37.78a2.787 2.787 0 01-1.246-3.739z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const BlogPrevPop: ContentPreviewProps = {
  title: "Planning with perfection",
  svgTH: <SVG />,
};

export const mediaPrevProp: MediaPreviewProps = {
  title: "Trying out Grafbase",
  svgTH: <GQL />,
  platform: "twitch",
};

export const projectPageProps: ProjectPageProps = {
  title: "zelda out Grafbase",
  description: `
        It all started out with an idea, if I was gonna re-build NFTGo's UI from
        scratch, and I had all the data available through an API, what would I
        build. How would I visualize raw json responses?
`,
  url: "",
  tech: [
    {
      name: "typescript",
      why: "Type-safety always enhances my developer experience, TypeScript is like eating your veggies, you might not like it that much but you're definetly gonna get a lotta benefits from it",
    },
    {
      name: "NextJs",
      why: "This app needed specific pages for NFTs, collections and wallets. I heavily relied on NextJs for its very intuitive routing architecture and its great support for catching route params and using them for API calls",
    },
  ],
  timeline: [
    "doodling it out",
    "layouting",
    "connecting to the API",
    "data viz",
    "pages and routes",
    "UI",
    "more UI",
  ],
};
