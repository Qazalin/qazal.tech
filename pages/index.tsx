import { gql } from "@apollo/client";
import { Layout } from "components/Layout";
import { client } from "gql/client";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

type Data = {
  post: string;
};
const Home: NextPage<InferGetStaticPropsType<Data>> = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div>hello</div>
    </Layout>
  );
};

export default Home;

/* 
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      {
        posts {
          title
          date
          excerpt
        }
      }
    `,
  });
  return {
    props: {
      data,
    },
  };
};
*/
