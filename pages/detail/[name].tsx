import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { PhoneDetailComponent } from "../../components/PhoneDetailComponent";
import { usePhoneContext } from "../../hooks/usePhoneContext";
import styles from "../../styles/Main.module.css";

export default function Detail() {
  const [phones] = usePhoneContext();
  const router = useRouter();

  const { name } = router.query;
  const phone = phones.find((phone) => phone.name === name);

  const goBack = () => router.push(`/`);

  useEffect(() => {
    if (!phone) goBack();
  }, [phone]);

  if (!phone) return null;

  return (
    <div className={styles.container}>
      <Head>
        <title>{`${phone.name} details`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={styles.main}
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "90vw",
          margin: 16,
        }}
      >
        <Link href="/">
          <a style={{ textDecoration: "underline", marginBottom: "1rem" }}>
            Back
          </a>
        </Link>

        <PhoneDetailComponent phone={phone} />
      </main>
    </div>
  );
}
