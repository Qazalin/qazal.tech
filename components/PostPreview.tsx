import { PostPreviewType } from "types";

export const PostPreview: React.FC<PostPreviewType> = ({
  title,
  slug,
  date,
  excerpt,
}) => {
  return (
    <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
      <dl>
        <dt className="sr-only">Published on</dt>
        <dd className="text-base leading-6 font-medium text-gray-500">
          <time dateTime={date}>{date}</time>
        </dd>
      </dl>
      <div className="space-y-5 xl:col-span-3">
        <div className="space-y-6">
          <h2 className="text-2xl leading-8 font-bold tracking-tight">
            <a className="text-gray-900" href={`/${slug}`}>
              {title}
            </a>
          </h2>
          <div className="prose max-w-none text-gray-500">{excerpt}</div>
        </div>
        <div className="text-base leading-6 font-medium">
          <a
            className="text-indigo-500 hover:text-indigo-600"
            aria-label='Read "Connecting Multiple Platforms Together"'
            href={`/${slug}`}
          >
            Read more →
          </a>
        </div>
      </div>
    </article>
  );
};
