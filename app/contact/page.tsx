import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-400 text-lg">Have questions? We'd love to hear from you.</p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
