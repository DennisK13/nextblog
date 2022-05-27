import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { IArticleFields } from "../src/@types/contentful";
import ContentService from "../src/util/content-service";
interface Props {
  articles: IArticleFields[];
}


const Home: NextPage<Props> = ({ articles }) => {
  const slugs = <ul>{articles.map(article => <li>{article.slug}</li>)}</ul>;
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Title</title>
        <meta
          name="description"
          content="This is a blog template."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {slugs}
        <h1 className={styles.title}>Welcome to my blog!</h1>

        <p className={styles.description}>
          This is a blog with many intersting articles about blank.
        </p>

        <div className={styles.grid}>
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
