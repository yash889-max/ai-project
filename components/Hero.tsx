import Link from 'next/link'

export default function Hero() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Welcome to AI Project
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Cutting-edge artificial intelligence solutions designed to transform your business and unlock new possibilities.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="px-8 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}
