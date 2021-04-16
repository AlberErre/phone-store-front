import type { AppProps } from "next/app";
import { PhoneProvider } from "../redux/providers/phoneProvider";
import { QueryClient, QueryClientProvider } from "react-query";
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
