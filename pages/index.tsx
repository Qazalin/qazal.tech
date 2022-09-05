import { gql } from "@apollo/client";
import { Layout } from "components/Layout";
import { client } from "gql/client";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { PostPreviewType } from "types";
import { PostPreview } from "components/PostPreview";

type Posts = { posts: PostPreviewType[] };

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
  return (
    <Layout>
      {data.posts.map((p) => (
        <PostPreview {...p} key={`post-${p.slug}`} />
      ))}
    </Layout>
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
