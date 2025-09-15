import React from 'react'
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <section
      id='contact'
      className='min-h-screen scroll-mt-20 bg-gradient-to-b from-pink-950 to-pink-900 py-12 px-4 sm:px-6 lg:px-8'
    >
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-serif font-bold text-white mb-4'>
            Contact Us
          </h1>
          <p className='text-lg text-gray-200 max-w-3xl mx-auto'>
            We'd love to hear from you! Whether you have questions, feedback, or want to discuss your fragrance needs, feel free to reach out to us.
          </p>
        </div>

        {/* Form & Info Side by Side */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div className='bg-white p-8 rounded-2xl shadow-2xl border border-gray-200 hover:shadow-pink-500/50 transition duration-500'>
            <h2 className='text-2xl font-serif font-semibold text-gray-900 mb-6'>
              Send Us a Message
            </h2>
            <form className='space-y-6'>
              <div>
                <label className='block text-sm font-medium text-gray-800 mb-1'>Your Name:</label>
                <input
                  type='text'
                  className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition duration-300'
                  placeholder='Your Name'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-800 mb-1'>Your Email:</label>
                <input
                  type='email'
                  className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition duration-300'
                  placeholder='youremail@example.com'
                />
              </div>
              <div>
                <textarea
                  rows='5'
                  className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition duration-300'
                  placeholder='Tell us about your fragrance needs...'
                />
              </div>
              <button className='w-full bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-lg transition duration-300 font-medium shadow-lg hover:shadow-pink-400/50'>
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className='bg-white p-8 rounded-2xl shadow-2xl border border-gray-200 hover:shadow-pink-500/50 transition duration-500 space-y-8'>
            <h2 className='text-2xl font-serif font-semibold text-gray-900 mb-6'>Contact Information</h2>

            {/* Phone */}
            <div className='flex items-start space-x-4'>
              <div className='bg-pink-200 p-4 rounded-full shadow-md'>
                <FaPhone className='text-pink-950 text-2xl' />
              </div>
              <div>
                <h3 className='text-lg font-medium text-gray-900'>Phone</h3>
                <p className='text-gray-800'>+1 (234) 567-8888</p>
                <p className='text-gray-600 text-sm'>Mon-Fri: 9am-6pm</p>
              </div>
            </div>

            {/* Email */}
            <div className='flex items-start space-x-4'>
              <div className='bg-pink-200 p-4 rounded-full shadow-md'>
                <FaEnvelope className='text-pink-950 text-2xl' />
              </div>
              <div>
                <h3 className='text-lg font-medium text-gray-900'>Email</h3>
                <p className='text-gray-800'>contact@perfume.com</p>
                <p className='text-gray-600 text-sm'>support@perfume.com</p>
              </div>
            </div>

            {/* Boutique Address */}
            <div className='flex items-start space-x-4'>
              <div className='bg-pink-200 p-4 rounded-full shadow-md'>
                <FaMapMarkerAlt className='text-pink-950 text-2xl' />
              </div>
              <div>
                <h3 className='text-lg font-medium text-gray-900'>Our Boutique</h3>
                <p className='text-gray-800'>123 Perfume Street</p>
                <p className='text-gray-600 text-sm'>Paris, France 75001</p>
              </div>
            </div>

            {/* Social Media */}
            <div className='mt-8'>
              <h3 className='text-lg font-medium text-gray-900 mb-4'>Follow Us</h3>
              <div className='flex space-x-4'>
                <a href="#" className='bg-pink-200 hover:bg-pink-400 p-4 rounded-full transition duration-300 shadow hover:shadow-pink-500/50'>
                  <FaInstagram className='text-pink-950 text-xl' />
                </a>
                <a href="#" className='bg-pink-200 hover:bg-pink-400 p-4 rounded-full transition duration-300 shadow hover:shadow-pink-500/50'>
                  <FaFacebook className='text-pink-950 text-xl' />
                </a>
                <a href="#" className='bg-pink-200 hover:bg-pink-400 p-4 rounded-full transition duration-300 shadow hover:shadow-pink-500/50'>
                  <FaTwitter className='text-pink-950 text-xl' />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


