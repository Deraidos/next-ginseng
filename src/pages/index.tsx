import Image from "next/image"
import { Inconsolata } from "next/font/google"
import { ShoppingCart } from "@phosphor-icons/react"

const inconsolata = Inconsolata({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`${inconsolata.className} bg-gray-900 h-[calc(100vh+6rem)]`}
    >
      <header className="bg-[rgb(30,30,30)] h-[80px] w-full text-white flex justify-between items-center text-xl border-b-2">
        <div className="w-[80px] lg:ml-32">
          <Image
            src="/white-logo-500px.webp"
            width={500}
            height={500}
            alt={"ginseng strip logo"}
          />
        </div>
        <nav className="h-full flex items-center border-l-2 p-4">
          <ul className="flex flex-row items-center gap-6">
            <li className="hover:bg-lime-300 hover:text-black cursor-pointer rounded-md px-2">
              Cool Stuffs
            </li>
            <li className="hover:bg-lime-300 hover:text-black cursor-pointer rounded-md px-2">
              WTH is Ginseng Strip?
            </li>
            <li className="hover:bg-lime-300 hover:text-black cursor-pointer rounded-md px-2">
              <ShoppingCart size={24} />
            </li>
          </ul>
        </nav>
      </header>
    </main>
  )
}
