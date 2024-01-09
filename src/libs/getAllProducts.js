import { axiosBase } from "@/api/axiosBase"

const getAllProducts = async () => {
  try{
    const res = await axiosBase.get("/products")
    return res.data
  } catch(err){
    throw new Error(err)
  }
}

export default getAllProducts