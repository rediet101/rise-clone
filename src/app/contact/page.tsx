import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side - Contact information */}
            <div className="lg:w-1/2 space-y-8"> {/* Increased space-y from 6 to 8 */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h1>
                <div className="h-1 w-16 bg-[#ee484a] mb-6"></div>
                
                <p className="text-lg text-gray-600 mb-8"> {/* Increased mb from 6 to 8 */}
                  We&apos;ll get back to you as soon as possible!
                </p>
              </div>

              <div className="space-y-8"> {/* Increased space-y from 6 to 8 */}
                <div className="pb-2"> {/* Added pb-2 for padding bottom */}
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">We&apos;re here to help!</h2> {/* Reduced mb from 4 to 3 */}
                  <p className="text-gray-600">Contact us below, and we&apos;ll respond promptly.</p>
                </div>

                <div className="pb-2"> {/* Added pb-2 for padding bottom */}
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">Have questions or need assistance?</h2> {/* Reduced mb from 4 to 3 */}
                  <p className="text-gray-600">We&apos;re here to help! Reach out to us through the contact options below.</p>
                </div>

                <div className="space-y-6"> {/* Increased space-y from 4 to 6 */}
                  <div className="pb-2"> {/* Added pb-2 for padding bottom */}
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Call</h3> {/* Added mb-1 */}
                    <p className="text-gray-600">+49(0)221650804184</p>
                  </div>

                  <div className="pb-2"> {/* Added pb-2 for padding bottom */}
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Our Location</h3> {/* Added mb-1 */}
                    <p className="text-gray-600">
                      Cologne District Court HRB 101987<br />
                      Subbelrather Strasse 15a<br />
                      50823 Cologne, Germany
                    </p>
                  </div>

                  <div className="pb-2"> {/* Added pb-2 for padding bottom */}
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Email</h3> {/* Added mb-1 */}
                    <p className="text-gray-600">info@risegmbh.de</p>
                    <p className="text-gray-600">Hello@Rise.Com</p>
                  </div>

                  {/* Social Media Links with Icons */}
                  <div className="pt-2"> {/* Added pt-2 for padding top */}
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Connect With Us</h3> {/* Reduced mb from 2 to 3 */}
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-600 hover:text-[#3b5998] transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-[#1DA1F2] transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-[#E4405F] transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-[#0A66C2] transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image and Form */}
            <div className="lg:w-1/2">
              {/* Image at the top */}
              <div className="relative h-100 w-full rounded-lg overflow-hidden shadow-md mb-6">
                <Image
                  src="/contact-image.jpg" // Replace with your image path
                  alt="Contact us"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Form below the image */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
                
                <form className="space-y-3">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border text-sm"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#3d628c] text-white py-2 px-4 rounded-full hover:bg-[#2d4a6a] focus:outline-none focus:ring-2 focus:ring-[#3d628c] focus:ring-offset-2 transition-colors duration-200 text-sm"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default page;