// components/ClientWrapper.js
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ClientWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default ClientWrapper;
