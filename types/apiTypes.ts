import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface PostPreviewType {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
}

export type PostType = PostPreviewType & {
  content: string;
  coverImage: {
    url: string;
  };
};

export type AllPostsType = { posts: PostPreviewType[] };

export type SinglePostType = { post: PostType };

export type SerializedPost = PostType & {
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
};
