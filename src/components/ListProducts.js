'use client'

import Link from "next/link";

export default function ListProducts({ productList, setProductList }) {

  return (
    <div className="flex flex-col gap-4 text-center my-5">
      {productList.map((product, index) => (
        <Link key={index} href={`/${product._id}`}>{product.title}</Link>
      ))}
    </div>
  )
}
