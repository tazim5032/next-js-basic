import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mt-2">
        The page you are looking for does not exist.
      </p>
      <Link href="/">
        <button className="p-4 bg-slate-700 text-white font-bold rounded-xl">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
