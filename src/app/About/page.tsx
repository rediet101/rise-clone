"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaLightbulb, FaBullseye, FaHandshake, FaBalanceScale, FaGlobe, FaHandsHelping } from 'react-icons/fa';

type TrustedPartner = {
  id: number;
  name: string;
  logo: string;
};

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const trustedByRef = useRef<HTMLDivElement>(null);
  const [trustedPartners] = useState<TrustedPartner[]>([
    { id: 1, name: 'Partner 1', logo: '/trust1.png' },
    { id: 2, name: 'Partner 2', logo: '/trust2.png' },
    { id: 3, name: 'Partner 3', logo: '/trust3.png' },
    { id: 4, name: 'Partner 4', logo: '/trust4.png' },
    { id: 5, name: 'Partner 5', logo: '/trust5.png' },
    { id: 6, name: 'Partner 6', logo: '/trust6.png' }
  ]);

  // Auto-scroll for Trusted By section
  useEffect(() => {
    const scrollContainer = trustedByRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;
    let animationId: number;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      
      // When we've scrolled halfway through the duplicated content, reset
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft = scrollAmount;
      }
      
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const slides = [
    {
      title: "Our Vision",
      icon: <FaLightbulb className="text-3xl text-yellow-500 mb-4" />,
      content: "Becoming a reliable and leading Company in the field of Export, Import and Distribution of Medical products, Automobiles, coffee, Fruits, Spices and Herbs."
    },
    {
      title: "Our Mission",
      icon: <FaBullseye className="text-3xl text-red-500 mb-4" />,
      content: "Our mission is to be a trusted leader in the export, import, and distribution of medical products, automobiles, and organic goods, driving excellence and sustainable growth globally."
    },
    {
      title: "Our Values",
      icon: <FaHandshake className="text-3xl text-green-500 mb-4" />,
      content: (
        <ul className="space-y-4 mt-4">
          <li className="flex items-start">
            <span className="mr-3 mt-1">
              <FaBalanceScale className="text-xl text-blue-500" />
            </span>
            <div>
              <h4 className="font-semibold">Ethical Business</h4>
              <p className="text-gray-600 text-sm">Conducting business with integrity and transparency</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1">
              <FaGlobe className="text-xl text-green-500" />
            </span>
            <div>
              <h4 className="font-semibold">Fair Trade</h4>
              <p className="text-gray-600 text-sm">Ensuring fair compensation for all stakeholders</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1">
              <FaHandsHelping className="text-xl text-purple-500" />
            </span>
            <div>
              <h4 className="font-semibold">Social Responsibility</h4>
              <p className="text-gray-600 text-sm">Making positive impacts in communities we serve</p>
            </div>
          </li>
        </ul>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white pt-4 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2 order-1">
                <h2 className="text-3xl font-semibold text-[#ee484a] mb-4">ABOUT US</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We specialise in importing medical products to Africa and exporting organic treasures like coffee and spices globally.
                </p>
                <p className='text-lg text-gray-600'>
                  We are a group of young and energetic professionals experienced the last five years on Import and Export medical products from Europe(mainly from Germany and Belgium), China, and India to the Broad demanding African market successfully and Africa´s Organic tastes such us Coffee, fruits, spice and herbs to the global market.
                </p>
              </div>
              
              <div className="w-full lg:w-1/2 order-2 mt-8 lg:mt-0">
                <div className="relative h-64 w-full lg:h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/aboutus.png"
                    alt="GROWHAUS About Us"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision/Mission/Values Slider Section */}
        <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-white p-8 rounded-lg shadow-md">
              <div className="min-h-64 text-center">
                {slides[currentSlide].icon}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{slides[currentSlide].title}</h3>
                <div className="text-gray-600">
                  {slides[currentSlide].content}
                </div>
              </div>
              
              <div className="flex justify-between mt-8">
                <button 
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Previous"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#ee484a]' : 'bg-gray-300'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Next"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section with Auto-scrolling */}
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Trusted By</h2>
            <div 
              ref={trustedByRef}
              className="flex items-center overflow-x-hidden py-4"
            >
              {[...trustedPartners, ...trustedPartners].map((partner, index) => (
                <div 
                  key={`${partner.id}-${index}`} 
                  className="flex-shrink-0 px-4"
                >
                  <div className="relative h-16 w-32 md:h-20 md:w-40">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      layout="fill"
                      objectFit="contain"
                      className="opacity-80 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Page;