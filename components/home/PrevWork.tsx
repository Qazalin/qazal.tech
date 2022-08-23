import { ReactElement } from "react";
import { Braintrust, NFTGo, Thirdwave } from "components/icons";

export const PrevWork = () => {
  const companies: { logo: ReactElement; url: string }[] = [
    {
      logo: <Braintrust />,
      url: "https://usebraintrust.com",
    },
    {
      logo: <Thirdwave />,
      url: "https://thirdwavelabs.com/",
    },
    {
      logo: <NFTGo />,
      url: "https://nftgo.io",
    },
  ];
  return (
    <div>
      <h3>Previuos work</h3>
      <div className="flex justify-between content-center items-center">
        {companies.map(({ logo, url }) => (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {logo}
          </a>
        ))}
      </div>
    </div>
  );
};
