import Head from "next/head";
import { useEffect } from "react";
import { Phone } from "../domain/Phone";
import { usePhoneContext } from "../hooks/usePhoneContext";
import styles from "../styles/Main.module.css";

const mockPhones = [
  {
    brand: "Samsung",
    name: "Samsung Galaxy A12 64GB Azul",
    description:
      "Se abre el telón ¡y aparecen las 4 cámaras del Samsung Galaxy A12! Pero no solo eso, también entran a escena la pantalla LCD IPS de 6,5 pulgadas, la batería de 5.000 mAh bien cargada para darlo todo en el escenario y el pequeño jack de audio de 3.5mm. Os recordamos que ha pasado por vestuario y viene con el sistema operativo Android 10 bajo la capa de personalización One UI.",
    image: {
      url:
        "https://allzone.es/636935-large_default/samsung-s21-g996-5g-dual-sim-8gb-ram-256gb-plata.jpg",
      type: "image/png",
    },
    color: "#0431B4",
    price: 786.76,
    colorDescription: "Azul",
  },
];

export default function Home() {
  const [phones, dispatch] = usePhoneContext();

  useEffect(() => {
    //TODO: load phones here...

    dispatch({ type: "ADD_PHONES", phones: mockPhones as Phone[] });
  }, []);

  useEffect(() => {
    console.log("phones", phones);
  }, [phones]);

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
