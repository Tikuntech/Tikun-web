import React, { HTMLInputTypeAttribute } from 'react'

type InputFormProps = {
  type?: HTMLInputTypeAttribute | undefined
  id: string
  name?: string
  placeholder: string
  label: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

const InputForm = ({
  type = 'text',
  id,
  name,
  placeholder,
  label,
  onChange,
  value,
}: InputFormProps) => {
  return (
    <div className="flex flex-col gap-y-3">
      <label
        htmlFor={id}
        className="text-sm text-red-dark leading-5 font-bold tracking-[8%] "
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required
        className="text-base font-medium p-3 rounded-2xl border
        border-[#eee] text-black outline-none
        focus:shadow-[0_0_0_2px_#0284C7] focus:border-transparent
        duration-200 placeholder-primary"
      />
    </div>
  )
}

export default InputForm
