'use client'
import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useMutation } from 'react-query'
import { postContactUs, PostContactUsData } from '@/services/api'

interface IFormInput {
  email: string
}
const FooterEmailInput: React.FC = () => {
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
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log('Form Data:', data)
    // toast(`Email "${data.email}" submitted successfully!`)
    setValue('email', '')


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
              className="flex-1 p-3 md:pl-4 pr-12 border border-gray-200 md:w-80 rounded-sm bg-[#11112B] text-white placeholder-gray-400"
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
        <FaArrowRightLong className="text-white w-10" />
      </button>
    </form>
  )
}

export default FooterEmailInput
