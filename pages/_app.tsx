import ContactProvider from "@/context/contacts/contactsContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContactProvider>
      <Component {...pageProps} />
    </ContactProvider>
  );
}
