import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { Web3Modal } from "@web3modal/react";
import Layout from "../components/Layout";
import { chain } from "@wagmi/core";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Web3Modal
        config={{
          theme: "light",
          projectId: "649078fdef4a68556a17c9f9609fadec",
          accentColor: "blackWhite",
          ethereum: {
            appName: "vcDao",
            autoConnect: true,
            chains: [
              chain.polygonMumbai
            ]
          },
        }}
      />
    </>
  );
}

export default MyApp;
