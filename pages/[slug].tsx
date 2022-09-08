import { gql } from "@apollo/client";
import { PostLayout } from "components/PostLayout";
import { client } from "gql/client";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { ParsedUrlQuery } from "querystring";
import { AllPostsType, SEOType, SerializedPost } from "types";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";
import { getPostBySlug, getSEOBySlug } from "gql/queries";
import { Page } from "components/Page";

const Post: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
  seo,
}) => {
  return (
    <Page seo={seo}>
      <PostLayout post={post} />
    </Page>
  );
};

export default Post;

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
  { post: SerializedPost; seo: SEOType },
  StaticPaths
> = async ({ params }) => {
  const data = await getPostBySlug(params?.slug);
  const seo = await getSEOBySlug("/" + params?.slug);

  // Serialize MDX content
  const mdxSource = await serialize(data.content, {
    mdxOptions: { rehypePlugins: [rehypeHighlight] },
  });

  const post: SerializedPost = {
    ...data,
    mdxSource,
  };

  return {
    props: {
      post,
      seo,
    },
  };
};
