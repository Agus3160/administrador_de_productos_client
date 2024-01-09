
export default function Product({product}) {
  return (
    <div className="flex flex-col gap-4 text-center">
      <h1 className="text-2xl">{product.title}</h1>
      <p>Price: {product.price}   Gs.</p>
      <p>Description: {product.description}</p>   
    </div>
  )
}
