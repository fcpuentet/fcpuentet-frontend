import type { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";

const Members: NextPage = () => {
  return (
    <>
      <Head>
        <title>Puentet 公式サイト</title>
        <meta name="description"
              content="サッカー Puentet 公式サイトです。最新のニュース、試合情報、所属選手・スタッフ紹介やチケット/グッズ購入、スタジアムへのアクセス、ホームタウン活動など役立つ情報を日々お届けしています。"/>
        <meta name="keywords" content="Puentet,サッカー"/>
        <meta name="robots" content="noindex"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div className="bg-white pb-6 sm:pb-8 lg:pb-12 h-full">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">

          <header className="flex justify-between items-center border-b py-4 md:py-8 mb-8 md:mb-12 xl:mb-16">
            <Link href="/">
              <a className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
                 aria-label="logo">
                <Image src="/emblem.png" width="108" height="64"/>
              </a>
            </Link>

            <nav className="hidden lg:flex gap-12">
              <Link href="/">
                <a className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Home</a>
              </Link>
              <Link href="/members">
                <a className="text-indigo-500 text-lg font-semibold">Members</a>
              </Link>
              <a href="#"
                 className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Pricing</a>
              <a href="#"
                 className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">About</a>
            </nav>

            <a href="#"
               className="hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Contact
              Sales</a>

            <button type="button"
                    className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"/>
              </svg>

              Menu
            </button>
          </header>

          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Meet our Team</h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple
              filler text, also known as placeholder text. It shares some characteristics of a real written text but is
              random or otherwise generated.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12">
            <div>
              <div className="h-48 sm:h-60 md:h-80 bg-gray-100 overflow-hidden rounded-lg shadow-lg mb-2 sm:mb-4">
                <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=500"
                     loading="lazy" alt="Photo by Radu Florin" className="w-full h-full object-cover object-center"/>
              </div>

              <div>
                <div className="text-indigo-500 md:text-lg font-bold">John McCulling</div>
                <p className="text-gray-500 text-sm md:text-base mb-3 md:mb-4">Founder / CEO</p>

                <div className="flex">
                  <div className="flex gap-4">
                    <a href="#" target="_blank"
                       className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>

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
              </div>
            </div>

            <div>
              <div className="h-48 sm:h-60 md:h-80 bg-gray-100 overflow-hidden rounded-lg shadow-lg mb-2 sm:mb-4">
                <img src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=500"
                     loading="lazy" alt="Photo by christian ferrer"
                     className="w-full h-full object-cover object-center"/>
              </div>

              <div>
                <div className="text-indigo-500 md:text-lg font-bold">Kate Berg</div>
                <p className="text-gray-500 text-sm md:text-base mb-3 md:mb-4">CFO</p>

                <div className="flex">
                  <div className="flex gap-4">
                    <a href="#" target="_blank"
                       className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>

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
              </div>
            </div>

            <div>
              <div className="h-48 sm:h-60 md:h-80 bg-gray-100 overflow-hidden rounded-lg shadow-lg mb-2 sm:mb-4">
                <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500"
                     loading="lazy" alt="Photo by Ayo Ogunseinde" className="w-full h-full object-cover object-center"/>
              </div>

              <div>
                <div className="text-indigo-500 md:text-lg font-bold">Greg Jackson</div>
                <p className="text-gray-500 text-sm md:text-base mb-3 md:mb-4">CTO</p>

                <div className="flex">
                  <div className="flex gap-4">
                    <a href="#" target="_blank"
                       className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>

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
              </div>
            </div>

            <div>
              <div className="h-48 sm:h-60 md:h-80 bg-gray-100 overflow-hidden rounded-lg shadow-lg mb-2 sm:mb-4">
                <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=500"
                     loading="lazy" alt="Photo by Midas Hofstra" className="w-full h-full object-cover object-center"/>
              </div>

              <div>
                <div className="text-indigo-500 md:text-lg font-bold">Robert Greyson</div>
                <p className="text-gray-500 text-sm md:text-base mb-3 md:mb-4">Creative Director</p>

                <div className="flex">
                  <div className="flex gap-4">
                    <a href="#" target="_blank"
                       className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>

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
              </div>
            </div>

            <div>
              <div className="h-48 sm:h-60 md:h-80 bg-gray-100 overflow-hidden rounded-lg shadow-lg mb-2 sm:mb-4">
                <img src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&q=75&fit=crop&w=500"
                     loading="lazy" alt="Photo by Elizeu Dias" className="w-full h-full object-cover object-center"/>
              </div>

              <div>
                <div className="text-indigo-500 md:text-lg font-bold">John Roberts</div>
                <p className="text-gray-500 text-sm md:text-base mb-3 md:mb-4">Investor Relations</p>

                <div className="flex">
                  <div className="flex gap-4">
                    <a href="#" target="_blank"
                       className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>

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
              </div>
            </div>

            <div>
              <div className="h-48 sm:h-60 md:h-80 bg-gray-100 overflow-hidden rounded-lg shadow-lg mb-2 sm:mb-4">
                <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&q=75&fit=crop&w=500"
                     loading="lazy" alt="Photo by Matheus Ferrero"
                     className="w-full h-full object-cover object-center"/>
              </div>

              <div>
                <div className="text-indigo-500 md:text-lg font-bold">Judy Amandez</div>
                <p className="text-gray-500 text-sm md:text-base mb-3 md:mb-4">Senior Art Director</p>

                <div className="flex">
                  <div className="flex gap-4">
                    <a href="#" target="_blank"
                       className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Members
