import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Phone Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Phone Store 📱</h1>
        <p className={styles.description}>
          Check out our awesome phones, press to see details.
        </p>

        {/* //NOTE: PhoneList here */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://albererre.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by Alber Erre
        </a>
      </footer>
    </div>
  );
}
