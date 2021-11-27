import { useEffect, useState } from "react";
import Head from "next/head";
//import {loadMap} from './map.ts'
import dynamic from "next/dynamic";


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
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">

        <LeafletMap />

        <p className="mt-3 text-2xl">
          Get started by editing{" "}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
