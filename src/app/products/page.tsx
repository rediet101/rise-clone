"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FaCheck,
  FaSearch,
  FaStar,
  FaShieldAlt,
  FaHeadset,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
  specs: string[];
  price: string;
};

type Category = {
  id: string;
  name: string;
};

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Page = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSlidesPerView(mobile ? 1 : 3);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const categories: Category[] = [
    { id: "all", name: "All Products" },
    { id: "medical", name: "Medical" },
    { id: "automobile", name: "Automobile" },
  ];

  const products: Record<string, Product[]> = {
    all: [
      {
        id: 1,
        name: "Medical Equipment",
        image: "/medical-equipment.jpg",
        description: "High-quality medical devices for professional healthcare use.",
        specs: ["FDA Approved", "3-year warranty", "Various sizes available"],
        price: "$1,299.99",
      },
      {
        id: 2,
        name: "Organic Coffee",
        image: "/organic-coffee.jpg",
        description: "Premium organic coffee beans sourced from sustainable farms.",
        specs: ["100% Organic", "Fair Trade Certified", "Medium Roast"],
        price: "$14.99/lb",
      },
      {
        id: 3,
        name: "Automotive Parts",
        image: "/auto-parts.jpg",
        description: "Durable replacement parts for all major vehicle makes.",
        specs: ["OEM Quality", "1-year warranty", "Easy installation"],
        price: "$89.99",
      },
      {
        id: 4,
        name: "Surgical Tools",
        image: "/surgical-tools.jpg",
        description: "Precision surgical instruments for medical professionals.",
        specs: ["Sterilized", "Stainless steel", "Various sets available"],
        price: "$499.99",
      },
      {
        id: 5,
        name: "Car Electronics",
        image: "/car-electronics.jpg",
        description: "Advanced car electronics for modern vehicles.",
        specs: ["Bluetooth enabled", "Easy plug-and-play", "2-year warranty"],
        price: "$199.99",
      },
    ],
    medical: [
      {
        id: 1,
        name: "Medical Equipment",
        image: "/medical-equipment.jpg",
        description: "High-quality medical devices for professional healthcare use.",
        specs: ["FDA Approved", "3-year warranty", "Various sizes available"],
        price: "$1,299.99",
      },
      {
        id: 4,
        name: "Surgical Tools",
        image: "/surgical-tools.jpg",
        description: "Precision surgical instruments for medical professionals.",
        specs: ["Sterilized", "Stainless steel", "Various sets available"],
        price: "$499.99",
      },
    ],
    automobile: [
      {
        id: 3,
        name: "Automotive Parts",
        image: "/auto-parts.jpg",
        description: "Durable replacement parts for all major vehicle makes.",
        specs: ["OEM Quality", "1-year warranty", "Easy installation"],
        price: "$89.99",
      },
      {
        id: 5,
        name: "Car Electronics",
        image: "/car-electronics.jpg",
        description: "Advanced car electronics for modern vehicles.",
        specs: ["Bluetooth enabled", "Easy plug-and-play", "2-year warranty"],
        price: "$199.99",
      },
    ],
  };

  const filteredProducts = products[activeCategory as keyof typeof products].filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const features: Feature[] = [
    {
      icon: <FaStar className="text-3xl text-yellow-500" />,
      title: "High Quality",
      description: "Premium products from trusted suppliers",
    },
    {
      icon: <FaCheck className="text-3xl text-green-500" />,
      title: "Verified",
      description: "Strict quality verification process",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-blue-500" />,
      title: "Warranty",
      description: "Comprehensive product warranties",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-500" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service",
    },
  ];

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    document.body.style.overflow = "hidden";
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "auto";
  };

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = container.children[0]?.clientWidth || 0;
    const gap = 24;
    const totalSlides = Math.ceil(filteredProducts.length / slidesPerView);
    
    // For mobile, if we're scrolling to the last slide, scroll all the way to the end
    if (isMobile && index === totalSlides - 1) {
      container.scrollTo({
        left: container.scrollWidth,
        behavior: "smooth"
      });
    } else {
      const scrollPosition = index * (cardWidth + gap);
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    }
    
    setCurrentSlide(index);
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      scrollToSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    const maxSlides = Math.ceil(filteredProducts.length / slidesPerView) - 1;
    if (currentSlide < maxSlides) {
      scrollToSlide(currentSlide + 1);
    } else if (isMobile) {
      // On mobile, ensure we can scroll all the way to the end
      scrollToSlide(maxSlides);
    }
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = container.children[0]?.clientWidth || 0;
    const gap = 24;
    const scrollPosition = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const totalSlides = Math.ceil(filteredProducts.length / slidesPerView);
    
    // Check if we've scrolled to the end (with a small buffer for rounding errors)
    const atEnd = scrollPosition >= maxScroll - 5;
    
    const newSlide = atEnd 
      ? totalSlides - 1 // Jump to last slide if at end
      : Math.round(scrollPosition / (cardWidth + gap));
    
    setCurrentSlide(newSlide);
  };

  const totalSlides = Math.ceil(filteredProducts.length / slidesPerView);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
              <button
                onClick={closeProductModal}
                className="absolute top-4 right-4 z-10 bg-[#3d628c] text-white rounded-full p-1 w-8 h-8 flex items-center justify-center hover:bg-[#2d4a6b] transition"
              >
                <FaTimes className="text-lg" />
              </button>
              <div className="p-6">
                <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  {selectedProduct.name}
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  {selectedProduct.description}
                </p>

                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Specifications:</h3>
                  <ul className="list-disc pl-5">
                    {selectedProduct.specs.map((spec: string, index: number) => (
                      <li key={index} className="mb-1">
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-[#3d628c]">
                    {selectedProduct.price}
                  </span>
                  <button className="bg-[#3d628c] text-white px-4 py-1 rounded-full hover:bg-[#2d4a6b] transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <section className="bg-white pt-4 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 order-1 lg:order-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
                Discover Quality Products
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                We have a variety of quality products that can be used to create
                product production.
              </p>

              <div className="max-w-xl mx-auto lg:mx-0 relative mb-6">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full py-2 px-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3d628c]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute right-4 top-2.5 text-gray-400" />
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-2 lg:order-2">
              <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/product-hero.jpg"
                  alt="Quality Products"
                  width={800}
                  height={450}
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category: Category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setCurrentSlide(0);
                  }}
                  className={`px-4 py-1 rounded-full transition-colors ${
                    activeCategory === category.id
                      ? "bg-[#3d628c] text-white"
                      : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="relative">
              <div className="flex items-center gap-4">
                {filteredProducts.length > slidesPerView && (
                  <button
                    onClick={handlePrev}
                    disabled={currentSlide === 0}
                    className={`hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100 transition ${
                      currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <FaChevronLeft className="text-[#3d628c]" />
                  </button>
                )}

                <div
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  className="flex overflow-x-auto gap-6 pb-8 scrollbar-none"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  {filteredProducts.map((product: Product) => (
                    <div
                      key={product.id}
                      className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-lg mb-2">
                          {product.name}
                        </h4>
                        <button
                          onClick={() => openProductModal(product)}
                          className="w-full bg-[#3d628c] hover:bg-[#2d4a6b] text-white py-1 rounded-full transition text-sm"
                        >
                          View Catalog
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredProducts.length > slidesPerView && (
                  <button
                    onClick={handleNext}
                    disabled={currentSlide >= totalSlides - 1}
                    className={`hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100 transition ${
                      currentSlide >= totalSlides - 1
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <FaChevronRight className="text-[#3d628c]" />
                  </button>
                )}
              </div>

              {totalSlides > 1 && (
                <div className="flex justify-center mt-6 gap-2">
                  {Array.from({ length: totalSlides }).map((_, index: number) => (
                    <button
                      key={index}
                      onClick={() => scrollToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentSlide === index
                          ? "bg-[#3d628c] w-6"
                          : "bg-gray-300"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature: Feature, index: number) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-all"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Page;