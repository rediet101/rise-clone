import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section className="p-8 bg-gray-100">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#ee484a] mb-4">ABOUT US</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="text-xl text-gray-600 mb-6">
          We specialise in importing medical products to Africa and exporting organic treasures like coffee and spices globally. We are a team of young professionals with five years of experience successfully importing medical products from Europe (Germany and Belgium), China, and India to Africa.
        </p>
      </div>

      {/* Stats Section (Sideways on All Screens) */}
      <div className="flex flex-row flex-wrap justify-center gap-8 mb-12">
        {/* First Stat */}
        <div className="text-center">
          <p className="bg-gradient-to-r from-red-300 to-red-400 bg-clip-text text-5xl text-transparent lg:text-7xl">
            +10
          </p>
          <p className="my-8 font-medium">Employees</p>
        </div>

        {/* Second Stat */}
        <div className="text-center">
          <p  className="bg-clip-text text-5xl text-transparent lg:text-7xl"
  style={{
    backgroundImage: 'linear-gradient(to right, #f88c8e, #ee484a)', // Light #ee484a to super #ee484a
  }}
>
            +20
          </p>
          <p className="my-8 font-medium">Products</p>
        </div>

        {/* Third Stat */}
        <div className="text-center">
          <p className="bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-5xl text-transparent lg:text-7xl">
            +30
          </p>
          <p className="my-8 font-medium">Loyal Customers</p>
        </div>

        {/* Fourth Stat */}
        <div className="text-center">
          <p className="bg-gradient-to-r from-[#3d628c] to-[#2a4566] bg-clip-text text-5xl text-transparent lg:text-7xl">
            +10
          </p>
          <p className="my-8 font-medium">Years Of Experience</p>
        </div>
      </div>

      {/* Learn More Button (Centered) */}
      <div className="flex justify-center">
        <Link href="/About">
          <Button
            variant="outline"
              className="w-full md:w-auto px-10 py-6 text-lg"
              style={{
                borderColor: '#3d628c',
                color: '#3d628c',
                borderRadius: '90px',
            }}
          >
            <span>Learn More</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="#3d628c"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;