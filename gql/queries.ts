import { gql } from "@apollo/client";
import { client } from "gql/client";
import { PostPreviewType, PostType, SEOType, SinglePostType } from "types";

export async function getAllPosts(): Promise<PostPreviewType[]> {
  const { data: posts } = await client.query<{ posts: PostType[] }>({
    query: gql`
      query Posts {
        posts {
          title
          date
          excerpt
          slug
        }
      }
    `,
  });
  return posts.posts;
}

export async function getPostBySlug(slug?: string): Promise<PostType> {
  const { data } = await client.query<SinglePostType>({
    query: gql`
      query get($slug: String) {
        post(where: { slug: $slug }) {
          title
          content
          date
          coverImage {
            url
          }
        }
      }
    `,
    variables: {
      slug: slug,
    },
  });
  return data.post;
}

export async function getSEOBySlug(slug?: string): Promise<SEOType> {
  const { data } = await client.query<{ seo: SEOType }>({
    query: gql`
      query SEO {
        seo(where: { parentSlug: "/" }) {
          title
          image {
            url
          }
          description
        }
      }
    `,
  });
  return data.seo;
}
