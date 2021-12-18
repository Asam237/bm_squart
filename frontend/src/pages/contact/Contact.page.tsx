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
            <div className="site__contact__input py-4">
              <input
                type="text"
                className="px-4 py-2 w-10/12 lg:w-11/12 border-gray-300 border"
                placeholder="Enter your name"
              />
              <input
                type="text"
                className="mt-3 px-4 py-2 w-10/12 lg:w-11/12 border-gray-300 border"
                placeholder="Enter a valid email adress"
              />
              <input
                type="text"
                className="mt-3 px-4 py-2 w-10/12 lg:w-11/12 border-gray-300 border h-28"
                placeholder="Enter your message"
              />
            </div>
          </div>
          <div className="contact__adress w-full md:w-1/2 bg-red-600 h-80"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
