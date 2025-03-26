import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#3d628c] to-[#2a4566] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* First Column: RISE GLOBAL GMBA Description */}
          <div>
            <p className="text-2xl font-bold" style={{ color: "#ee484a" }}>
              RISE GLOBAL GMBA
            </p>
            <p className="mt-2">
              We specialise in importing medical products to Africa and exporting organic treasures like coffee and spices globally.
            </p>
          </div>

          {/* Second Column: Industry */}
          <div>
            <h3 className="font-bold mb-4">Industry</h3>
            <ul>
              <li>AgITech businesses</li>
              <li>Café</li>
              <li>Import and Exports</li>
            </ul>
          </div>

          {/* Third Column: Products */}
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <ul>
              <li>Surgical Equipment&apos;s</li>
              <li>Hospital Furniture&apos;s</li>
              <li>Laboratory Products</li>
            </ul>
          </div>

          {/* Fourth Column: Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul>
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Aboutt" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-gray-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-gray-300">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Fifth Column: Contact Us with Social Media Links */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul>
              <li>+49(0)221650804184</li>
              <li>info@risegmbh.de</li>
              <li className="mt-4">
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-gray-300">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    <FaLinkedin />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright and Links */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="text-center">
            <p>
              Rise Ltd 2024 | Company | Powered By Droga Consulting Services | All Rights Reserved | Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;