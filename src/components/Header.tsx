'use client'
import Link from 'next/link'
import Image from 'next/image'
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai'
import { useState } from 'react'

const NavLinks = () => {
  return (
    <>
      <li className="hover:bg-lime-300 hover:text-black cursor-pointer rounded-md px-2 transition-all ease-in-out">
        <Link href="products">Products</Link>
      </li>
      <li className="hover:bg-lime-300 hover:text-black cursor-pointer rounded-md px-2 transition-all ease-in-out">
        WTH is Ginseng Strip?
      </li>
      <li className="hover:text-lime-300 cursor-pointer rounded-md px-2 transition-all ease-in-out">
        <AiOutlineShoppingCart size={24} />
      </li>
    </>
  )
}

export default function Navbar() {
  const [navMobile, setNavMobile] = useState(false)
  const toggleNav = () => setNavMobile(!navMobile)

  return (
    <>
      <section
        className="flex flex-col bg-[rgb(20,20,20)]"
        id="megatext__container"
      >
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

      <header className="nav nav__container bg-[rgb(20,20,20)] h-[80px] w-full text-white flex justify-between items-center text-xl border-y-2">
        <div className="nav-logo max-w-[80px] m-4 lg:m-16">
          <Link href="/">
            <Image
              src="/white-logo-500px.webp"
              width={500}
              height={500}
              alt={'ginseng strip logo'}
            />
          </Link>
        </div>

        {/* navbar desktop */}
        {/* <nav className="nav nav__items h-full flex items-center border-l-2 p-4"> */}
        <nav className="hidden lg:flex nav nav__items h-full items-center border-l-2 p-4">
          <ul className="nav nav__items flex flex-row items-center gap-6">
            <NavLinks />
          </ul>
        </nav>

        {/* menu button */}
        <div onClick={toggleNav} className="flex justify-end px-4 lg:hidden">
          {!navMobile ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>

        {/* navbar mobile */}
        {/* <nav className={!navMobile ? 'hidden' : 'h-full w-full flex relative'}>
          <ul>
            <li className="hover:bg-lime-300 hover:text-black cursor-pointer rounded-md px-2 transition-all ease-in-out">
              <Link href="products">Products</Link>
            </li>
            <li className="hover:bg-lime-300 hover:text-black cursor-pointer rounded-md px-2 transition-all ease-in-out">
              WTH is Ginseng Strip?
            </li>
          </ul>
        </nav> */}
      </header>
    </>
  )
}
