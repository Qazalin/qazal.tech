import { gql } from "@apollo/client";
import { client } from "gql/client";
import { NextApiResponse } from "next";
import { PostPreviewType } from "types";

const createSitemap = (
  slugs: string[]
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs
          .map((slug) => {
            return `
                <url>
                    <loc>${`https://leerob.io/${slug}`}</loc>
                </url>
            `;
          })
          .join("")}
    </urlset>
`;

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  const { data } = await client.query<{ posts: PostPreviewType[] }>({
    query: gql`
      query Posts {
        posts {
          slug
        }
      }
    `,
  });
  const allPages = data.posts.map((p) => `/${p.slug}`);

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );
  res.write(createSitemap(allPages));
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}
