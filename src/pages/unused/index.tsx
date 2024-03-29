import Image from 'next/image'
import Link from 'next/link'
import { Inconsolata } from 'next/font/google'
import { ShoppingCart } from '@phosphor-icons/react'

const inconsolata = Inconsolata({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${inconsolata.className} bg-[rgb(20,20,20)]`}>
      <section className="flex flex-col" id="megatext__container">
        <div className="megatext__theText flex p-6 lg:p-12 justify-center items-center">
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

      {/* navbar */}
      <header className="nav nav__container bg-[rgb(20,20,20)] h-[80px] w-full text-white flex justify-between items-center text-xl border-y-2">
        <div className="nav-logo max-w-[80px] m-4 lg:m-16">
          <Image
            src="/white-logo-500px.webp"
            width={500}
            height={500}
            alt={'ginseng strip logo'}
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

      {/* highlight latest products (OLD)
      <section className="grid__container grid grid-cols-2 ">
        <div className="bg-[#D97A36]">
          <h2>2020</h2>
          <h1>TIKUS GOT</h1>
        </div>

        <div className="relative">
          <img src="/catalog/tikusgot-01.jpeg" />
        </div>
      </section> */}

      {/* highlight latest products */}
      <section className="latest__container flex flex-col-reverse h-full w-full lg:flex-row">
        <div className="bg-[#D97A36] p-4 flex flex-1 flex-col text-center justify-center space-y-4">
          <h2 className="text-4xl">2023</h2>
          <h1 className="text-4xl lg:text-5xl underline font-bold">
            TIKUS GOT
          </h1>
        </div>

        <div className="flex flex-1 flex-col">
          <img src="/catalog/tikusgot-01.jpeg" className="h-full w-full" />
        </div>
      </section>

      <section className="latest__container flex flex-col-reverse h-full w-full lg:flex-row-reverse">
        <div className="bg-[#DDC2B7] p-4 flex flex-1 flex-col text-center justify-center space-y-4">
          <h2 className="text-4xl">2022</h2>
          <h1 className="text-4xl lg:text-5xl underline font-bold">
            BASQUIAT ON THE DRAW
          </h1>
        </div>

        <div className="flex flex-1">
          <img src="/catalog/botd-01.jpeg" className="h-full w-full" />
        </div>
      </section>

      {/* start white separator */}
      <div className="separator bg-gray-50 text-center p-4 flex flex-grow justify-center gap-4 lg:gap-[50vw]">
        <p className="font-bold lg:text-xl">GINSENG STRIP</p>
        <p className="font-bold lg:text-xl">SELLING SILK TO PAY THE MILK</p>
      </div>

      <section className="footer__group p-4 lg:p-12">
        <div className="text-white flex flex-col items-center justify-center py-[23vh] gap-2">
          <h2 className="font-semibold text-3xl">BE THE FIRST TO KNOW</h2>
          <input
            type="email"
            id="UserEmail"
            aria-describedby="helper-text-explanation"
            className="text-black text-sm block p-2.5 w-full lg:w-[50vh]"
            placeholder="Your email"
          ></input>
        </div>
        {/* end white separator */}
        <footer className="text-black bg-gray-50 flex flex-col lg:flex-row justify-between p-[3.5rem] h-[340px]">
          <div>
            <Image
              src="/black-logo_500x500.png"
              alt={'ginseng strip logo black'}
              width={96}
              height={96}
            />
          </div>
          <div>
            <h2 className="font-bold text-xl">Information</h2>
            <ul className="flex flex-col gap-2">
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Refund & Return Policy</li>
              <li>Shipping Information</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-xl">Reach Us</h2>
            <div>Instagram</div>
            <div>Twitter</div>
          </div>
        </footer>
      </section>
    </main>
  )
}
