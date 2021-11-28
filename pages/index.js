import { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "./Header/Header";

const LeafletMap = dynamic(() => import("./LeafletMap/LeafletMap.tsx"), {
  ssr: false,
});

export default function Home() {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
    // loadMap();
  }, []);

  if (!isBrowser) {
    return null;
  }

  return (
    <>
      <Head>
        <title>opensnowmap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <LeafletMap />
      </main>
    </>
  );
}
