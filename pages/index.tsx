import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { IArticleFields } from "../src/@types/contentful";
import ContentService from "../src/util/content-service";
import Header from "../components/navbar/Navbar";
interface Props {
  articles: IArticleFields[];
}


const Home: NextPage<Props> = ({ articles }) => {
  const slugs = <ul>{articles.map(article => <li>{article.slug}</li>)}</ul>;
  return (
    <div className='px-8 h-[3000px]'>
      <Head>
        <title>Blog Title</title>
        <meta
          name="description"
          content="This is a blog template."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>

      <main className='min-h-screen py-16 flex flex-1 flex-col justify-center items-center'>
        {/* {slugs} */}
        <h1 className='text-5xl font-bold underline'>Welcome to my blog!</h1>

        <p className='text-center my-16 text-4xl'>
          This is a blog with many intersting articles about blank.
        </p>

        <div className='flex items-center justify-center flex-wrap max-w-[800px]'>
          {articles.map((article) => (
            <a
              key={article.slug}
              href={`/${article.slug}`}
              className={styles.card}
            >
              <h2>{article.title} &rarr;</h2>
              <p>{article.description}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = (
    await ContentService.instance.getEntriesByType<IArticleFields>("article")
  ).map((entry) => entry.fields);

  return {
    props: {
      articles,
    },
  };
};
