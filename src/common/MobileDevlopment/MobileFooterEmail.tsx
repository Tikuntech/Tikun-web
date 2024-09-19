// 'use client'
// import React, { useState } from 'react'
// import { FaArrowRightLong } from 'react-icons/fa6'

// const MobileFooterEmail: React.FC = () => {
//   const [email, setEmail] = useState<string>('')

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(event.target.value)
//   }

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     console.log('Email submitted:', email)
//   }

//   return (
//     <form onSubmit={handleSubmit} className="relative flex items-center w-full">
//       <input
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={handleChange}
//         className="w-full flex-grow px-4 py-3  border-b-2 bottom-1 border-b-custom-black  bg-[#D5D9E5] focus:border-transparent  border border-[#D5D9E5]"
//         required
//       />
//       <button
//         type="submit"
//         className="absolute inset-y-0 right-0 flex items-center justify-center p-2"
//       >
//         <FaArrowRightLong className="text-[#11112B]" />
//       </button>
//     </form>
//   )
// }

// export default MobileFooterEmail

'use client'
import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { toast } from 'react-toastify'
import { postContactUs, PostContactUsData } from '@/services/api'
import { useMutation } from 'react-query'

interface IFormInput {
  email: string
}
const MobileFooterEmail: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>()

  // const notify = () => toast(`Email "${data.email}" submitted successfully!`);

  // Handle form submission
  // const onSubmit: SubmitHandler<IFormInput> = (data) => {
  //   console.log('Form Data:', data)
  //   toast(`Email "${data.email}" submitted successfully!`)
  //   setValue('email', '')
    
  // }

  

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log('Form Data:', data)
    // toast(`Email "${data.email}" submitted successfully!`)



    const postData: PostContactUsData = {
      "Subject": "New Query form Tikuntech",
      message: "Newsletter",
      email: data?.email,
      "Website": "Tikuntech",
      recipient_email: "jbrown@tikuntech.com",
      phone: "",
      name: "Newsletter",

    };

    mutation.mutate(postData)
    
  }



  const mutation = useMutation(postContactUs, {
    onSuccess: (data) => {
    
      console.log('Form successfully submitted:', data);
      // setSubmissionStatus('success');
      reset();
      setValue('email', '')
      toast.success("Successfully Signed Up for the Newsletter!");
    },
    onError: (error) => {
      console.error('Error submitting form:', error);
    
      toast.error("Failed to submit the form. Please try again.");

    },
  });



  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex items-center w-full"
    >
      <div>
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
          }}
          render={({ field: { onBlur, onChange, value } }) => (
            <input
              type="email"
              placeholder="Enter your email"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className="w-72 md:w-64 flex-grow px-4 py-3  border-b-2 bottom-1 border-b-custom-black  bg-[#D5D9E5] focus:border-transparent  border border-[#D5D9E5]"
              required
            />
          )}
        />

        {errors.email && (
          <p className=" text-red-700">{errors.email.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="absolute inset-y-0 right-0 flex items-center justify-center p-2"
      >
        <FaArrowRightLong className="text-black w-10" />
      </button>
    </form>
  )
}

export default MobileFooterEmail
