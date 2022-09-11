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
  const { data, error } = await client.query<{ seo: SEOType }>({
    query: gql`
      query SEO($slug: String) {
        seo(where: { parentSlug: $slug }) {
          title
          image {
            url
          }
          description
          keywords
        }
      }
    `,
    variables: {
      slug: slug,
    },
  });
  return data.seo;
}
