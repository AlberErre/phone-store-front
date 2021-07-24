import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { PhoneProvider } from "../context/PhoneContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PhoneProvider>
        <Component {...pageProps} />;
      </PhoneProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
