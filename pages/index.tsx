import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { PostPreviewType, SEOType } from "types";
import { PostPreview } from "components/PostPreview";
import { Fragment } from "react";
import { Page } from "components/Page";
import { getAllPosts, getSEOBySlug } from "gql/queries";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
  seo,
}) => {
  return (
    <Page seo={seo}>
      <div className="prose dark:prose-invert space-y-4 w-full h-full max-w-5xl">
        {posts.reverse().map((p, i) => (
          <Fragment key={`post-${i}`}>
            <PostPreview {...p} />
            <hr />
          </Fragment>
        ))}
      </div>
    </Page>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{
  posts: PostPreviewType[];
  seo: SEOType;
}> = async () => {
  const posts = await getAllPosts();
  const seo = await getSEOBySlug("/");

  return {
    props: {
      posts,
      seo: seo,
    },
    revalidate: 60 * 60 * 24,
  };
};
