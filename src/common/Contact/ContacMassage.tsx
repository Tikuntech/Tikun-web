import { postContactUs, PostContactUsData } from '@/services/api'
import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { toast } from 'react-toastify'

interface IFormInput {
  email: string
  name: string
  message: string
}

const ContacMassage: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<
    'success' | 'error' | null
  >(null)
  const [isChecked, setIsChecked] = useState(false)
  const {
    control,
    reset,
    setValue,
    handleSubmit,

    formState: { errors },
  } = useForm<IFormInput>()

  const mutation = useMutation(postContactUs, {
    onSuccess: (data) => {
      console.log('Form successfully submitted:', data)
      // setSubmissionStatus('success');
      reset()
      toast.success('Form submitted successfully!')
    },
    onError: (error) => {
      console.error('Error submitting form:', error)
      setSubmissionStatus('error')
      toast.error('Failed to submit the form. Please try again.')
    },
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // setIsSubmitting(true);

    const postData: PostContactUsData = {
      Subject: 'New Query form Tikuntech',
      message: data?.message,
      email: data?.email,
      Website: 'Tikuntech',
      recipient_email: 'jbrown@tikuntech.com',
      phone: '',
      name: data?.name,
    }

    mutation.mutate(postData)
  }

  return (
    <>
      {/* Form Overlay */}

      <div className="inset-0 pt-5 md:p-10 md:h-full h-full flex flex-col items-center justify-center ">
        <div className="bg-custom-blue p-10 rounded-lg shadow-md md:w-[800px] 1366px:w-[750px] md:p-10   1366px:pb-20">
          <h2 className="text-2xl md:text-4xl font-medium mb-6 pl-5 text-black">
            Send Us Message
          </h2>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:space-y-4 md:p-5  "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="block text-sm font-bold text-black ">Name</h2>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Enter Your Name ..."
                      type="text"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  )}
                />
              </div>
              <div>
                <h2 className="block text-sm font-bold text-black ">Email</h2>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Enter Your Email Address ..."
                      type="email"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  )}
                />
              </div>
            </div>

            <div>
              <h2 className="block text-sm font-bold text-black ">Message</h2>
              <Controller
                name="message"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <textarea
                    {...field}
                    id="message"
                    placeholder="Enter Your Message ..."
                    required
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                )}
              />
            </div>
            <div className="md:flex ">
              <div className="flex items-center gap-3 mt-5">
                <input
                  type="checkbox"
                  id="consent"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="h-12 w-12 rounded border-gray-300 text-black focus:ring-custom-blue"
                  required
                />
                <label
                  htmlFor="consent"
                  className="text-white text-xs md:text-sm "
                >
                  By ticking this box, I am consenting to be sent monthly
                  articles and promotions through Tickuntech newsletter.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-2 py-2 w-full md:w-40  text-white font-semibold rounded-lg shadow-md transition-colors duration-300 mt-5 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#11112B] focus:ring-2'
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

export default ContacMassage
