import Head from "next/head";
import { useEffect } from "react";
import { PhoneListContainer } from "../components/PhoneListContainer";
import { Phone } from "../domain/Phone";
import { useFetchPhones } from "../hooks/useFetchPhones";
import { usePhoneContext } from "../hooks/usePhoneContext";
import styles from "../styles/Main.module.css";

export default function Home() {
  const [phones, dispatch] = usePhoneContext();
  const { phones: fetchedPhones } = useFetchPhones();

  useEffect(() => {
    if (!fetchedPhones) return;

    dispatch({ type: "ADD_PHONES", phones: fetchedPhones });
  }, [fetchedPhones]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Phone Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{ margin: 16 }}>
        <h1 className={styles.title}>Phone Store 📱</h1>
        <p className={styles.description}>
          Check out our awesome phones, press to see details.
        </p>

        <div
          style={{
            flexGrow: 1,
            flexWrap: "wrap",
            width: "80vw",
            overflow: "scroll",
          }}
        >
          {!fetchedPhones && !(phones.length > 0) && "loading..."}

          {phones.length > 0 && <PhoneListContainer phones={phones} />}
        </div>
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
