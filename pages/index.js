import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>La Casa del Mono - Monkey Lounge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <img className="h-48  " src="logo_transparent.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
