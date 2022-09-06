import { gql } from "@apollo/client";
import { PostLayout } from "components/PostLayout";
import { client } from "gql/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { AllPostsType, PostType, SinglePostType } from "types";

export default function Post({ post }: { post: PostType }) {
  return <PostLayout post={post} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<AllPostsType>({
    query: gql`
      {
        posts {
          slug
        }
      }
    `,
  });

  return {
    paths: data.posts.map((p) => `/${p.slug}`),
    fallback: false,
  };
};

interface StaticPaths extends ParsedUrlQuery {
  slug: string;
}
export const getStaticProps: GetStaticProps<
  SinglePostType,
  StaticPaths
> = async ({ params }) => {
  console.log(params?.slug);
  const { data } = await client.query<SinglePostType>({
    query: gql`
      query get($slug: String) {
        post(where: { slug: $slug }) {
          title
          content {
            markdown
          }
          date
          coverImage {
            url
          }
        }
      }
    `,
    variables: {
      slug: params?.slug,
    },
  });

  return {
    props: {
      post: data.post,
    },
  };
};
