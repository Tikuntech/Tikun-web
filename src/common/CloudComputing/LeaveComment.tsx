import { postContactUs, PostContactUsData } from '@/services/api'
import React, { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'

interface IFormInput {
  email: string
  name: string
  message: string
}
const LeaveComment: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<
    'success' | 'error' | null
  >(null)

  const {
    control,
    reset,
    setValue,
    handleSubmit,

    formState: { errors },
  } = useForm<IFormInput>()
  const [isChecked, setIsChecked] = useState(false)

 


  const mutation = useMutation(postContactUs, {
    onSuccess: (data) => {
    
      console.log('Form successfully submitted:', data);
      // setSubmissionStatus('success');
      reset();
      toast.success("Form submitted successfully!");
    },
    onError: (error) => {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
      toast.error("Failed to submit the form. Please try again.");

    },
  });



  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // setIsSubmitting(true);
  
   

    const postData: PostContactUsData = {
      "Subject": "New Query form Tikuntech",
      message: data?.message,
      email: data?.email,
      "Website": "Tikuntech",
      recipient_email: "jbrown@tikuntech.com",
      phone: "",
      name:data?.name

    };

    mutation.mutate(postData)

  }



  return (
    <>
      {/* Form Overlay */}
      <div className="inset-0 p-4 md:p-10 flex flex-col items-center justify-center">
        <div className="bg-[#11112B] p-8 rounded-lg shadow-md w-full ">
          <h2 className="text-2xl md:text-4xl font-medium mb-6 pl-5 text-white">
            Leave A Comment
          </h2>
          <form 
        onSubmit={handleSubmit(onSubmit)}
          
          className="md:space-y-4 md:p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="block text-sm font-medium text-custom-blue ">
                  Name
                </h2>

                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                    placeholder="Enter Your Name ..."
                    type="text"
                    id="name"
                    {...field}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                   
                  )}
                />

               
              </div>
              <div>
                <h2 className="block text-sm font-medium text-custom-blue ">
                  Email
                </h2>

                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                  placeholder="Enter Your Email Address ..."
                  type="email"
                  id="email"
                  {...field}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                    
                  )}
                />
                
              </div>
            </div>

            <div>
              <h2 className="block text-sm font-medium text-custom-blue ">
                Message
              </h2>
              <textarea
                id="message"
                placeholder="Enter Your Message ..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="md:flex">
              <div className="flex items-center gap-3 mt-5">
                <input
                  type="checkbox"
                  id="consent"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="h-12 w-12 rounded border-gray-300 text-custom-blue focus:ring-custom-blue"
                  required
                />
                <label
                  htmlFor="consent"
                  className="text-white text-xs md:text-sm pl-5"
                >
                  By ticking this box, I am consenting to be sent monthly
                  articles and promotions through Tickuntech newsletter.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-4 py-2 w-full md:w-40  text-white font-semibold rounded-lg shadow-md transition-colors duration-300 mt-5 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-custom-blue focus:ring-2'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
            {/* Submission Status */}
            {submissionStatus === 'success' && (
              <p className="text-green-500 mt-4" aria-live="polite">
                Thank you for your message! We will get back to you soon.
              </p>
            )}
            {submissionStatus === 'error' && (
              <p className="text-red-500 mt-4" aria-live="polite">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  )
}

export default LeaveComment
