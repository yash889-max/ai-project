import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-blue-900 to-cyan-900 rounded-lg p-12 border border-accent/30">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-300 mb-8">Join us in revolutionizing AI technology. Contact us today to learn more.</p>
        <Link
          href="/contact"
          className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-blue-600 transition inline-block"
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}
