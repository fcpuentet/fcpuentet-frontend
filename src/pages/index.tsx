import type { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";

const TopPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>FC PUENTET 公式サイト</title>
        <meta name="description"
              content="サッカー Puentet 公式サイトです。最新のニュース、試合情報、所属選手・スタッフ紹介やチケット/グッズ購入、スタジアムへのアクセス、ホームタウン活動など役立つ情報を日々お届けしています。"/>
        <meta name="keywords" content="Puentet,サッカー"/>
        <meta name="robots" content="noindex"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div className="h-screen bg-white">
        <div className="flex flex-col max-w-screen-2xl h-full mx-auto px-4 md:px-8 pb-4 md:pb-8">
          <main className="flex justify-center items-center flex-1">
            <section className="flex flex-col items-center">
              <div className="max-w-xl flex flex-col items-center text-center pt-8 lg:pt-32 pb-16 lg:pb-48">
                <Image src="/emblem.png" width="942" height="557"/>

                <p
                  className="text-blue-700 text-lg xl:text-xl font-semibold mt-16 mb-8"
                >人と人との「思い」をつなぐ架け橋<br/>そしてすべての人を「幸せ」にするチームへ</p>

                <p
                  className="text-blue-500 text-xl xl:text-3xl font-semibold"
                >Comming Soon</p>

              </div>

              <div className="flex justify-center lg:justify-start items-center gap-4">
                <span className="text-gray-400 text-sm sm:text-base font-semibold tracking-widest uppercase">Social</span>
                <span className="w-12 h-px bg-gray-200"></span>

                <div className="flex gap-4">
                  <a href="#" target="_blank"
                     className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                    <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>

                  <Link href="https://instagram.com/fcpuentet?igshid=YmMyMTA2M2Y=">
                    <a target="_blank"
                       className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </Link>

                  <a href="#" target="_blank"
                     className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                    <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </section>
          </main>

        </div>
      </div>
    </>
  );
}

export default TopPage
