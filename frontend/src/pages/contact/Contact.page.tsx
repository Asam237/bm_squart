import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="site__service py-8 md:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="contact__form w-full md:w-1/2 flex-col md:px-4">
            <h1
              style={{ fontFamily: " 'Poppins', sans-serif" }}
              className="font-bold text-gray-800 text-3xl"
            >
              Contact Us
            </h1>
          </div>
          <div className="contact__adress w-full md:w-1/2 bg-red-600 h-80"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
