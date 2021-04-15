import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/Main.module.css";

export default function Detail() {
  const router = useRouter();
  const { name } = router.query;

  if (!name) return null;

  return (
    <div className={styles.container}>
      <Head>
        <title>{`${name} details`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>{`${name} details:`}</h2>

        {/* //NOTE: Detail Component here */}
      </main>
    </div>
  );
}
