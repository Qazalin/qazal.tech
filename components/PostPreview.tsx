import { useRouter } from "next/router";
import { PostPreviewType } from "types";

export const PostPreview: React.FC<PostPreviewType> = ({
  title,
  slug,
  date,
  excerpt,
}) => {
  const router = useRouter();
  return (
    <article
      className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline cursor-pointer px-5 hover:bg-zinc-100 dark:hover:bg-zinc-900 py-2 rounded-lg transition-colors"
      onClick={() => router.push(`/${slug}`)}
    >
      <dl className="self-center">
        <dt className="sr-only">Published on</dt>
        <dd className="text-base leading-6 font-medium text-gray-500">
          <time dateTime={date}>{date}</time>
        </dd>
      </dl>
      <div className="space-y-5 xl:col-span-3">
        <div className="space-y-6">
          <h2 className="text-2xl leading-8 font-bold tracking-tight">
            {title}
          </h2>
          <p className="max-w-none">{excerpt}</p>
        </div>
        <div className="leading-6 font-medium">
          <button
            className="bg-indigo-400 dark:bg-indigo-400 p-1 px-3 rounded-md hover:scale-105 transition-all text-current"
            aria-label={`Read "${title}"`}
          >
            Read
          </button>
        </div>
      </div>
    </article>
  );
};
