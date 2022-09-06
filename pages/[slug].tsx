import { gql } from "@apollo/client";
import { PostLayout } from "components/PostLayout";
import { client } from "gql/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { AllPostsType, PostType, SerializedPost, SinglePostType } from "types";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";

export default function Post({ post }: { post: SerializedPost }) {
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
  { post: SerializedPost },
  StaticPaths
> = async ({ params }) => {
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

  // Serialize MDX content
  const mdxSource = await serialize(data.post.content.markdown, {
    mdxOptions: { rehypePlugins: [rehypeHighlight] },
  });

  const post: SerializedPost = {
    ...data.post,
    content: {
      mdxSource,
      markdown: data.post.content.markdown,
    },
  };

  return {
    props: {
      post,
    },
  };
};
