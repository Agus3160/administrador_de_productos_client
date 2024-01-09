import Product from '@/components/Product'

export default async function ProductPage({params}) {
  
  const id = params.id

  const res = await fetch(`http://localhost:8000/api/products/${id}`)
  const product = await res.json()

  return(
    <main className="flex flex-col gap-5 w-screen h-screen items-center justify-center">
      <Product product={product} />
    </main>
  )
}
