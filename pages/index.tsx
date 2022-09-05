import { gql } from "@apollo/client";
import { client } from "gql/client";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { PostPreviewType } from "types";
import { PostPreview } from "components/PostPreview";
import { Fragment } from "react";

export type Posts = { posts: PostPreviewType[] };

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
  return (
    <div className="prose dark:prose-invert space-y-4 w-full h-full max-w-5xl">
      {data.posts.map((p, i) => (
        <Fragment key={`post-${i}`}>
          <PostPreview {...p} />
          <hr />
        </Fragment>
      ))}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{ data: Posts }> = async () => {
  const { data } = await client.query<Posts>({
    query: gql`
      {
        posts {
          title
          date
          excerpt
          slug
        }
      }
    `,
  });
  return {
    props: {
      data,
    },
  };
};
