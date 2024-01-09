'use client'

import { useState } from "react"

export default function InputField({value, onChange, placeholder, type, name, id, required, labelText}) {

  const [errorMessage, setErrorMessage] = useState("")

  const validate = (e) => {
    const {value} = e.target

    let errorMessage = ""

    if(required && value.length === 0) {
      errorMessage = "This field is required"
    }

    setErrorMessage(errorMessage)
  }

  const onChangeHandler = (e) => {
    validate(e)
    onChange(e)
  }

  return (
    <>

      <div className="flex gap-4 p-3 items-center bg-gray-100">
        <label className="w-1/4 text-gray-500" htmlFor={id}>{labelText}</label>
        <input
          className="p-1 border border-gray-300 rounded-md w-3/4"
          value={value}
          onChange={onChangeHandler}
          placeholder={placeholder}
          type={type}
          name={name}
          id={id}
          required={required}
        >
        </input>
      </div>

      {errorMessage.length > 0 && <p className="text-red-500">{errorMessage}</p>}
    </>
    
  )
}
