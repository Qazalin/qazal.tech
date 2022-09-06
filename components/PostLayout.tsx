import { PostType, SerializedPost, SinglePostType } from "types";
import Image from "next/future/image";
import { MDXRemote } from "next-mdx-remote";

export const PostLayout: React.FC<{ post: SerializedPost }> = ({ post }) => {
  return (
    <div className="prose dark:prose-invert space-y-4 h-full max-w-5xl w-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
        <Image
          src={post.coverImage.url}
          className="rounded-md"
          width={900}
          height={100}
        />
        <div className="flex flex-col items-center text-center justify-center">
          <p className="text-zinc-300 dark:text-zinc-700 prose">{post.date}</p>
          <h1>{post.title}</h1>
        </div>
      </div>
      <div className="w-full h-full">
        <MDXRemote {...post.content.mdxSource} />
      </div>
    </div>
  );
};
