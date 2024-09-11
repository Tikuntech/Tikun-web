import React, { useState } from 'react'

const ContacMassage: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<
    'success' | 'error' | null
  >(null)
  const [isChecked, setIsChecked] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulating form submission (API call here)
    setTimeout(() => {
      // Randomly simulating success or error for demo
      const isSuccess = Math.random() > 0.5

      if (isSuccess) {
        setSubmissionStatus('success')
      } else {
        setSubmissionStatus('error')
      }
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <>
      {/* Form Overlay */}

      <div className="inset-0 pt-5 md:p-10 h-full flex flex-col items-center justify-center">
        <div className="bg-custom-blue p-8 rounded-lg shadow-md w-full ">
          <h2 className="text-2xl md:text-4xl font-medium mb-6 pl-5 text-black">
            Send Us Message
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:space-y-4 md:p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="block text-sm font-bold text-black ">Name</h2>
                <input
                  placeholder="Enter Your Name ..."
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <h2 className="block text-sm font-bold text-black ">Email</h2>
                <input
                  placeholder="Enter Your Email Address ..."
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <h2 className="block text-sm font-bold text-black ">Message</h2>
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
