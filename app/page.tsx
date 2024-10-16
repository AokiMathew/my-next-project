import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "./_libs/microcms";
import NewsList from "./_components/NewsList";
import ButtonLink from "./_components/ButtonLink";
import { TOP_NEWS_LIMIT } from "./_constants";

export const revalidate=60;

export default async function Home(){
  const name="世界";
  const data=await getNewsList({
    limit:TOP_NEWS_LIMIT,
  });

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で{name}を変える</h1>
          <p className={styles.description}>私達は市場をリードしているグローバルテックカンパニーです。</p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
          priority
          sizes="100vw"
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}