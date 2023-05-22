import "@/styles/globals.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>GINSENG STRIP 2020</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Ginseng Strip 2020" />
      <link rel="icon" href="/favicon.png" />
      <Component {...pageProps} />
    </>
  )
}
