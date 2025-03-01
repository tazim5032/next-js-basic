import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-lg font-semibold">
          MySite
        </a>
        <div className="space-x-4">
          <Link href="/about" className="text-gray-300 hover:text-white">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact Us
          </Link>
          <Link href="/login" className="text-gray-300 hover:text-white">
            Login
          </Link>
          <Link href="/register" className="text-gray-300 hover:text-white">
            Register
          </Link>
          <Link href="/logout" className="text-gray-300 hover:text-white">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
