import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>La Casa del Mono - Monkey Lounge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative py-16 bg-white">
        <div
          className="hidden absolute top-0 inset-x-0 h-2/3 bg-gray-50 lg:block"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto bg-green-600 lg:bg-transparent lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
              <div
                className="absolute inset-x-0 h-2/3 bg-gray-50 lg:hidden"
                aria-hidden="true"
              />
              <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-2 lg:aspect-w-1">
                  <img
                    className="object-contain object-center rounded-3xl shadow-2xl"
                    src="logo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="relative bg-green-600 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
              <div
                className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-green-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
                <svg
                  className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-green-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
              </div>
              <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                <h2
                  className="text-3xl font-extrabold text-white"
                  id="join-heading"
                >
                  Welcome to the Jungle
                </h2>
                <p className="text-lg text-white">
                  This is the house of local primatologist Daniela Solano and
                  Roberto (Mono)
                </p>

                <p className="text-lg text-white">
                  For Humans: Spend the day relaxing in the Jungle or the Beach
                  lounge with cold drinks, paddle boards and fishing included.
                </p>

                <p className="text-lg text-white">
                  Costarrican Day: Traditional bbq with local food & drinks
                  where you can join in cooking, farming, wood & bbq.
                </p>

                <p className="text-lg text-white">
                  Science Day: Once a week Msc. Daniela Solano gives a tour and
                  a interactive conference on the Osa Peninsula Wildlife.
                </p>

                <p className="text-lg text-white">
                  For Monkeys: Lot's of trees, some really big with fresh leaves
                  and fruits for Spider, Squirel, Howler and White Face monkeys.
                  Lot's of birds to bother like Toucans, Maccaws and Crab Hawk.
                  Please come because then more tourists come and we don't have
                  to cut more trees.
                </p>

                <a
                  className="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-green-700 hover:bg-gray-50 sm:inline-block sm:w-auto"
                  href="#"
                >
                  Opening June 2021
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//
