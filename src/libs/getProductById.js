import { axiosBase } from "@/api/axiosBase";

const getProductById = async (id) => {
  try {
    const res = await axiosBase.get(`/products/${id}`)
    return res
  } catch (err) {
    throw new Error(err)
  }
}