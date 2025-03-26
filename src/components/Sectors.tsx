import React from 'react';
import Image from 'next/image';

const Sectors = () => {
  return (
    <section className="p-8 bg-gray-100">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#ee484a] mb-4">OUR SECTORS</h1>
        <p className="text-xl text-gray-600">
          Streamlining our sectors to focus on impactful solutions and specialized services.
        </p>
      </div>

      {/* Container for Sideways Paragraphs */}
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        {/* Medical Equipment Section */}
        <div className="group flex-1 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          {/* Image */}
          <div className="flex justify-center mb-4">
            <Image
              src="/medical-equipment.gif" // Replace with the actual path to your image
              alt="Medical Equipment"
              width={64} // Adjust the width as needed
              height={64} // Adjust the height as needed
              className="rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-[#3d628c] transition-colors duration-300">
            Medical Equipment’s
          </h2>
          <p className="text-lg text-gray-600">
            We export a full range of medical products. Our product range includes: Full-scale supply of all medicines, Surgical Instruments and Equipment, Laboratory products, Diagnostic modalities, Imaging modalities, Emergency Healthcare materials and kits, Endoscopic products, Hospital furniture.
          </p>
        </div>

        {/* Automobile Section */}
        <div className="group flex-1 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          {/* Image */}
          <div className="flex justify-center mb-4">
            <Image
              src="/automobile-icon.gif" // Replace with the actual path to your image
              alt="Automobile"
              width={64} // Adjust the width as needed
              height={64} // Adjust the height as needed
              className="rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-[#3d628c] transition-colors duration-300">
            Automobile
          </h2>
          <p className="text-lg text-gray-600">
            RISE exports different types of automobiles from different countries to Ethiopia. Automotive is one of the major sectors RISE is involved in. We export various model vehicles from different parts of the world. Every vehicle we export is inspected by professionals. Contact us to order any type of vehicle.
          </p>
        </div>

        {/* Coffee Section */}
        <div className="group flex-1 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          {/* Image */}
          <div className="flex justify-center mb-4">
            <Image
              src="/coffee-icon.gif" // Replace with the actual path to your image
              alt="Coffee"
              width={64} // Adjust the width as needed
              height={64} // Adjust the height as needed
              className="rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-[#3d628c] transition-colors duration-300">
            Coffee
          </h2>
          <p className="text-lg text-gray-600">
            Ethiopia is the origin of coffee (birthplace of coffee) with a wide variety of taste profiles depending on the weather and altitude it grows. The Ethiopian coffee bean is steeped in a rich history of tradition and culture. Ethiopians have been growing coffee for centuries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sectors;