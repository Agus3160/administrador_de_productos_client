'use client'

import Form from "@/components/Form"
import { useEffect, useState } from "react"
import createProduct from "@/libs/createProduct"
import ListProducts from "@/components/ListProducts"
import getAllProducts from "@/libs/getAllProducts"

export default function Home() {

  const [productList, setProductList] = useState([])
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
  })

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts()
      setProductList(products)
    }
    fetchProducts()
  }, [])

  const fields = [
    {name: "title",id: "title",type: "text",placeholder: "Title",value: formData.title,labelText: "Title",required: true},
    {name: "price",id: "price",type: "number",placeholder: "Price",value: formData.price,labelText: "Price",required: true},
    {name: "description",id: "description",type: "text",placeholder: "Description",value: formData.description,labelText: "Description",required: true}
  ]

  const onSubmitFn = async (data) => {
    const res = await createProduct(data)
    const newProduct = res.data
    setProductList(prevProductList => [...prevProductList, newProduct])
    setFormData({title: "", price: "", description: ""})
  }

  return (
    <div className="sm:w-1/2 my-5 mx-auto gap-5">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl text-center">Product Manager</h1>

        <Form 
          fields={fields}
          formData={formData}
          setFormData={setFormData}
          onSubmitFn={() => onSubmitFn(formData)}
          buttonText={"Create"}
          successMessage={"Product created correctly"}
          errorMessage={"Error creating product"}
        />
      </div>

      <hr className="my-5 mx-auto"></hr>

      <div>
        <h1 className="text-2xl text-center">All Products</h1>
        <ListProducts setProductList={setProductList} productList={productList} />
      </div> 

    </div>
  )
}
