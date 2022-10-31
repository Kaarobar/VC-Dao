import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { Web3Modal } from "@web3modal/react";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Web3Modal
        config={{
          theme: "dark",
          projectId: "649078fdef4a68556a17c9f9609fadec",
          accentColor: "default",
          ethereum: {
            appName: "vcDao",
            autoConnect: true,
          },
        }}
      />
    </>
  );
}

export default MyApp;
