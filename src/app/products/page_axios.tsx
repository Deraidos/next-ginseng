'use client'
import Header from '@/components/Header'
import Image from 'next/image'
import axios from 'axios'
import { Suspense, useEffect, useState } from 'react'
import Loading from './loading'

interface Products {
  id: number
  title: string
  image: string
  description: string
  price: string
}

export default function Products() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      console.log(res.data) // for debugging
      setProducts(res.data)
    })
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <main className="">
      <Header />
      <section>
        <h1 className="text-3xl font-black px-12 py-4">All Products</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 px-12">
          {products.map((product: Products, index) => (
            <div key={index} className="flex flex-col p-14 gap-4 justify-start">
              <Image
                src={product.image}
                alt={'image description'}
                width={1920}
                height={1080}
                className="h-1/2 object-scale-down"
              />
              <h2 className="text-3xl font-bold">{product.title}</h2>
              <div className="text-xl">
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
