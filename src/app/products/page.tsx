import Header from '@/components/Header'
import { revalidatePath } from 'next/cache'
import Image from 'next/image'

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  return data
}

async function getBlogPosts() {
  const res = await fetch('https://fakestoreapi.com/products')
  const posts = await res.json()
  return posts
}

export default async function CoolStuff() {
  const products = await getProducts()
  const posts = await getBlogPosts()
  return (
    <main className="">
      <Header />
      <div>
        <h1 className="text-3xl font-black px-12 py-4">All Products</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 px-12">
          {products.map((product: any) => (
            <div className="flex flex-col p-14 gap-4 justify-start">
              <Image
                src={product.image}
                alt={'image description'}
                width={300}
                height={300}
              />
              <h2 key={product.id} className="text-2xl font-bold">
                {product.title}
              </h2>
              <p key={product.id}>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
