import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Image from 'next/image'; // Import the Image component from Next.js

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100">
      {/* Text Content */}
      <div className="max-w-md text-center md:text-left mb-8 md:mb-0">
        {/* Main Heading */}
        <h1 className="text-6xl font-bold mb-4 text-gray-800">
          Bringing Innovation to Healthcare
        </h1>

        {/* Subheading */}
        <p className="text-xl mb-6 text-gray-600">
          Your Trusted Partner in Medical Equipment
        </p>

        {/* Tagline */}
        <p className="text-lg mb-8 text-gray-500">
          <strong>Made In Germany</strong>
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Link href="/products">
            <Button
              variant="default"
              className="w-full md:w-auto px-10 py-8 text-lg "
              style={{
                backgroundColor: '#3d628c',
                borderRadius: '90px',
              }}
            >
              Discover
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              className="w-full md:w-auto px-10 py-8 text-lg"
              style={{
                borderColor: '#3d628c',
                color: '#3d628c',
                borderRadius: '90px',
              }}
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <Image
          src="/hero.jpg" // Replace with the actual path to your image
          alt="Medical Equipment"
          width={650} // Adjust the width as needed
          height={400} // Adjust the height as needed
          className="rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default Hero;
