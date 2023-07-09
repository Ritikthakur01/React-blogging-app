import { useState } from 'react'

export const useForm = (initialValue) => {
  const [value,setValue] = useState(initialValue)

  function handleChange(e){
    e.preventDefault();
    setValue(e.target.value)
  }

  return {
    value,
    onChange:handleChange
  }
}
