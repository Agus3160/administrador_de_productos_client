"use client" 

import InputField from "./InputField"
import { useState } from "react"

export default function Form({fields, onSubmitFn, formData, setFormData, buttonText, successMessage, errorMessage}) {
  
  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const cleanFields = () => {
    setFormData(prevFormData => {
      const updatedFormData = { ...prevFormData };
      for (let key in updatedFormData) {
        updatedFormData[key] = "";
      }
      return updatedFormData;
    })
  }
  
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  return (
    <form 
      className="flex flex-col gap-4"
      onSubmit={async (e) => {
        setSuccess(false)
        setError(false)
        e.preventDefault()
        try{  
          await onSubmitFn(formData)
          setSuccess(true)
          cleanFields()
        }catch(err){
          setError(true)
        }
      }}
    >
      <div className="flex flex-col gap-4">
        {
          fields.map((field,index) => {
            return <InputField 
              key={index}
              value={formData[field.name]}
              onChange={onChangeHandler}
              placeholder={field.placeholder}
              type={field.type}
              name={field.name}
              required={field.required}
              labelText={field.labelText}
              id={field.id}
            />
          })
        }
      </div>
      <button className="p-1 border bg-gray-200 border-gray-300 rounded-md w-3/4 mx-auto" type="submit">{buttonText}</button>
      {success && <p className="text-green-500 text-center">{successMessage}</p>}
      {error && <p className="text-red-500 text-center">{errorMessage}</p>}
    </form>
  )
}
