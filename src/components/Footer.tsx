import Link from "next/link";
import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-900 py-10 px-6 md:px-12 lg:px-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <Link
            href="/"
            className="font-bold text-2xl text-red-500 hover:text-red-400 transition-colors duration-300"
          >
            Pizza Hut
          </Link>
          <p className="mt-4 text-sm text-gray-600">
            Experience the best pizzas crafted with love, fresh ingredients, and
            unmatched flavors.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              <Twitter size={24} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              <Instagram size={24} />
            </Link>
          </div>
        </div>

        {/* Explore Section */}
        <div>
          <h2 className="font-semibold text-lg text-gray-800">Explore</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/menu"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/deals"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                Deals & Offers
              </Link>
            </li>
            <li>
              <Link
                href="/locations"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                href="/franchise"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                Franchise Opportunities
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Support Section */}
        <div>
          <h2 className="font-semibold text-lg text-gray-800">
            Customer Support
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/contact"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="/order-tracking"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                Track Your Order
              </Link>
            </li>
            <li>
              <Link
                href="/feedback"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                Feedback
              </Link>
            </li>
          </ul>
        </div>

        {/* Policies Section */}
        <div>
          <h2 className="font-semibold text-lg text-gray-800">Policies</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/refund-policy"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                Refund Policy
              </Link>
            </li>
            <li>
              <Link
                href="/cookie-policy"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-200 pt-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Pizza Hut. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
