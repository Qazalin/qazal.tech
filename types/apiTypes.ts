export interface PostPreviewType {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
}

export type PostType = PostPreviewType & {
  content: {
    markdown: string;
  };
  coverImage: {
    url: string;
  };
};

export type AllPostsType = { posts: PostPreviewType[] };

export type SinglePostType = { post: PostType };
