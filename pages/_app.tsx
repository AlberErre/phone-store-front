import type { AppProps } from "next/app";
import { PhoneProvider } from "../redux/providers/phoneProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PhoneProvider>
      <Component {...pageProps} />;
    </PhoneProvider>
  );
}

export default MyApp;
