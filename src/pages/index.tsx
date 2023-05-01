import Image from "next/image"
import { Inconsolata } from "next/font/google"
import { ShoppingCart } from "@phosphor-icons/react"
import Link from "next/link"

const inconsolata = Inconsolata({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`${inconsolata.className} bg-[rgb(20,20,20)] h-[calc(100vh+6rem)]`}
    >
      <section className="flex flex-col" id="megatext__container">
        <div
          className="flex p-6 lg:p-12 justify-center items-center"
          id="megatext__theText"
        >
          <Link href="/">
            <Image
              src="/gsText.svg"
              width={1920}
              height={1920}
              alt="ginseng strip text"
            />
          </Link>
        </div>
      </section>

      <header className="nav nav__container bg-[rgb(10,10,10)] h-[80px] w-full text-white flex justify-between items-center text-xl border-y-2">
        <div className="nav-logo max-w-[80px] m-4 lg:m-32">
          <Image
            src="/white-logo-500px.webp"
            width={500}
            height={500}
            alt={"ginseng strip logo"}
          />
        </div>
        <nav className="nav nav__items h-full flex items-center border-l-2 p-4">
          <ul className="nav nav__items flex flex-row items-center gap-6">
            <li className="hover:bg-lime-300 hover:text-black cursor-pointer rounded-md px-2 transition-all ease-in-out">
              Cool Stuffs
            </li>
            <li className="hover:bg-lime-300 hover:text-black cursor-pointer rounded-md px-2 transition-all ease-in-out">
              WTH is Ginseng Strip?
            </li>
            <li className="hover:bg-lime-300 hover:text-black cursor-pointer rounded-md px-2 transition-all ease-in-out">
              <ShoppingCart size={24} />
            </li>
          </ul>
        </nav>
      </header>
    </main>
  )
}
