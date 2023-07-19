import Header from '@/components/Header'
import Image from 'next/image'

interface Products {
  id: number
  title: string
  image: string
  description: string
  price: string
}

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  return data
}

export default async function Products() {
  const products = await getProducts()

  return (
    <main className="">
      <Header />
      <section>
        <h1 className="text-3xl font-black px-12 py-4">All Products</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 px-12">
          {products.map((product: Products) => (
            <div className="flex flex-col p-14 gap-4 justify-start">
              <Image
                src={product.image}
                alt={'image description'}
                width={1920}
                height={1080}
                className="h-1/2 object-scale-down"
              />
              <h2 key={product.id} className="text-3xl font-bold">
                {product.title}
              </h2>
              <div key={product.id} className="text-xl">
                <p>{product.description}</p>
                <p className="font-bold">Rp{product.price}K</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
