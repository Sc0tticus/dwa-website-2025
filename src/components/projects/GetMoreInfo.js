import React from 'react'

const GetMoreInfo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get More Info
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s get acquainted! Tell us a little bit about yourself and we&apos;ll send you information on how to get involved.
          </p>
        </div>
        
        {/* Form Container */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-200 shadow-lg">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-800 mb-3">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full border-b-3 border-blue-300 bg-transparent py-3 px-1 text-lg focus:border-blue-600 focus:outline-none transition-colors placeholder-gray-400"
                  placeholder="Enter your first name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-3">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border-b-3 border-blue-300 bg-transparent py-3 px-1 text-lg focus:border-blue-600 focus:outline-none transition-colors placeholder-gray-400"
                  placeholder="Your phone number"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-800 mb-3">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full border-b-3 border-blue-300 bg-transparent py-3 px-1 text-lg focus:border-blue-600 focus:outline-none transition-colors placeholder-gray-400"
                  placeholder="Enter your last name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="address" className="block text-sm font-semibold text-gray-800 mb-3">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full border-b-3 border-blue-300 bg-transparent py-3 px-1 text-lg focus:border-blue-600 focus:outline-none transition-colors placeholder-gray-400"
                  placeholder="Your address"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border-b-3 border-blue-300 bg-transparent py-3 px-1 text-lg focus:border-blue-600 focus:outline-none transition-colors placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="getInvolved" className="block text-sm font-semibold text-gray-800 mb-3">
                  How would you like to get involved? →
                </label>
                <input
                  type="text"
                  id="getInvolved"
                  name="getInvolved"
                  className="w-full border-b-3 border-blue-300 bg-transparent py-3 px-1 text-lg focus:border-blue-600 focus:outline-none transition-colors placeholder-gray-400"
                  placeholder="Volunteer, donate, partner..."
                />
              </div>
            </div>
            
            <div className="flex justify-center pt-8">
              <button
                type="submit"
                className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Submit Information
              </button>
            </div>
          </form>
        </div>
        
        {/* Enhanced Bottom CTA Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
              <div className="text-white mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Ready to make a difference?
                </h3>
                <p className="text-lg opacity-90">
                  Join thousands of supporters creating lasting change
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Learn More
                </button>
                <button className="bg-purple-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetMoreInfo
