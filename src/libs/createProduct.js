import { axiosBase } from "@/api/axiosBase";

const createProduct = async (productData) => {
  try {
    const res = await axiosBase.post("/products", productData)
    return res
  } catch (err) {
    throw new Error(err)
  }
}

export default createProduct