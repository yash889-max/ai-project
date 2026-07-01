'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true)
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Form submitted:', data)
      setSubmitted(true)
      reset()
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-900 rounded-lg p-8 border border-gray-800">
      {submitted && (
        <div className="mb-6 p-4 bg-green-900/30 border border-green-500 rounded-lg text-green-400">
          ✓ Thank you! We've received your message and will get back to you soon.
        </div>
      )}

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          {...register('name', { required: 'Name is required' })}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition text-white"
          placeholder="Your name"
        />
        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition text-white"
          placeholder="your@email.com"
        />
        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Subject</label>
        <input
          type="text"
          {...register('subject', { required: 'Subject is required' })}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition text-white"
          placeholder="How can we help?"
        />
        {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          {...register('message', { required: 'Message is required' })}
          rows={5}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition text-white resize-none"
          placeholder="Tell us more about your inquiry..."
        />
        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-blue-600 disabled:bg-gray-600 transition"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
