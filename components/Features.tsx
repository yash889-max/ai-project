export default function Features() {
  const features = [
    {
      title: 'Advanced AI',
      description: 'Leverage cutting-edge machine learning models and algorithms.'
    },
    {
      title: 'Scalable',
      description: 'Built to handle growth and adapt to your changing needs.'
    },
    {
      title: 'Secure',
      description: 'Enterprise-grade security and data protection standards.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance from our expert team.'
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="p-6 rounded-lg border border-gray-800 hover:border-accent transition bg-gray-900/50">
              <h3 className="text-xl font-bold mb-2 text-accent">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
