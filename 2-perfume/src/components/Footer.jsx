import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiApplepay, SiMastercard, SiPaypal, SiVisa } from 'react-icons/si';

const Footer = () => {
  const sections = [
    {
      title: 'Quick Links',
      links: ['Home', 'Shop', 'New Arrivals', 'Best Sellers', 'Gift Sets'],
    },
    {
      title: 'Customer Service',
      links: ['Contact Us', 'FAQs', 'Shipping Policy', 'Returns & Exchange', 'Privacy Policy'],
    },
  ];

  const socialIcons = [FaFacebook, FaTwitter, FaInstagram];
  const paymentIcons = [SiVisa, SiMastercard, SiPaypal, SiApplepay];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300 pt-14 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-4 tracking-wide">Scent Heaven</h3>
            <p className="text-gray-400 mb-6">
              Discover premium fragrances that elevate your senses. 
              From classic to contemporary scents, Scent Heaven brings luxury to your doorstep.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((Icon, i) => (
                <a
                  href="#"
                  key={i}
                  className="p-3 rounded-full bg-gray-800 hover:bg-pink-600 transition transform hover:scale-110"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {sections.map(({ title, links }, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold text-white mb-5 border-b-2 border-pink-600 inline-block pb-1">
                {title}
              </h3>
              <ul className="space-y-3 mt-4">
                {links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="hover:text-pink-500 transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 border-b-2 border-pink-600 inline-block pb-1">
              Newsletter
            </h3>
            <p className="mb-4 text-gray-400">
              Subscribe to get updates on our latest fragrances and exclusive offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email Address"
                className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-900 shadow-inner"
                required
              />
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-r-lg transition shadow-md"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-5 flex items-center text-gray-400">
              <FaEnvelope className="w-5 h-5 mr-2 text-pink-500" />
              <span>support@scenthaven.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left space-y-1">
            <p>&copy; {new Date().getFullYear()} <span className="font-semibold">Scent Heaven</span>. All rights reserved.</p>
            <p className="text-sm bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent font-semibold">
              Designed with ❤️ by Dharmiki Parmar
            </p>
          </div>
          <div className="flex space-x-6 mt-5 md:mt-0">
            {paymentIcons.map((Icon, i) => (
              <div key={i} className="p-2 bg-gray-800 rounded-lg hover:bg-pink-600 transition transform hover:scale-110">
                <Icon className="h-6 w-8 text-white" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

