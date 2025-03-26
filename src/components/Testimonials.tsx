"use client";
import Image from 'next/image';
import { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: "/user4.gif",
      text: "Working with Rise has been a game-changer. Their professionalism, attention to detail, and commitment to quality have exceeded our expectations. From start to finish, they delivered exceptional results that truly set them apart.",
      author: "John Doe"
    },
    {
      id: 2,
      image: "/user3.gif",
      text: "I can say for Rise Global mean consistency & reliability towards quality standard. Always they are available with solution kind of import or export. Have a wide range of portfolio.",
      author: "Jane Smith"
    },
    {
      id: 3,
      image: "/user1.gif",
      text: "The team at Rise demonstrated outstanding expertise and delivered our project ahead of schedule. Their communication was excellent throughout the entire process.",
      author: "Michael Johnson"
    },
    {
      id: 4,
      image: "/user2.gif",
      text: "Exceptional service and support! Rise went above and beyond to ensure our needs were met. Their attention to detail is unmatched in the industry.",
      author: "Sarah Williams"
    },
    {
      id: 5,
      image: "/user5.gif",
      text: "We've worked with many vendors over the years, but Rise stands out for their innovative solutions and customer-centric approach. Highly recommended!",
      author: "David Brown"
    },
    {
      id: 6,
      image: "/user6.gif",
      text: "The quality of work delivered by Rise was outstanding. They understood our vision perfectly and executed it flawlessly. Will definitely work with them again.",
      author: "Emily Davis"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="p-8 bg-gray-100">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#ee484a] mb-4">TESTIMONIALS</h1>
      </div>

      {/* Testimonials Slider */}
      <div className="relative max-w-4xl mx-auto">
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Single Testimonial Slide */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <Image
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].author}
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <p className="text-lg text-gray-600 mb-4">
            {testimonials[currentIndex].text}
          </p>
          <p className="text-lg font-bold text-gray-800">
            - {testimonials[currentIndex].author}
          </p>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`mx-1 w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#ee484a]' : 'bg-gray-300'}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;