import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
        <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-t gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
            <div className="col-span-full lg:col-span-2">
              <div className="lg:-mt-2 mb-4">
                <Link href="/">
                  <a className="inline-flex items-center text-black-800 text-xl md:text-2xl font-bold gap-2"
                     aria-label="logo">
                    <Image src="/emblem.png" width="108" height="64"/>
                  </a>
                </Link>
              </div>

              <p className="text-gray-500 sm:pr-8">FC PUENTET の公式サイト</p>
              <p className="text-gray-500 sm:pr-8 mb-6">最新のニュース、試合情報、所属選手・スタッフ紹介の情報をお届けしています。</p>

              <div className="flex gap-4">
                <a href="#" target="_blank"
                   className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                  <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>

                <a href="#" target="_blank"
                   className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                  <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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

            <div>
              <div className="text-gray-800 font-bold tracking-widest uppercase mb-4">About</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="#"
                     className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">FC PUENTET について</a>
                </div>

                <div>
                  <a href="#"
                     className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">チームメンバー</a>
                </div>
              </nav>
            </div>

            <div>
              <div className="text-gray-800 font-bold tracking-widest uppercase mb-4">Legal</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="#"
                     className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">利用規約</a>
                </div>

                <div>
                  <a href="#"
                     className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">プライバシーポリシー</a>
                </div>

                <div>
                  <a href="#"
                     className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">運営会社</a>
                </div>
              </nav>
            </div>
          </div>

          <div className="text-gray-400 text-sm text-center border-t py-8">© 2022 - PUENTET. ALL RIGHTS RESERVED.
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
