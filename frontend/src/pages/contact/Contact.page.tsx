import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="site__service py-8 md:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="contact__form w-full md:w-1/2 bg-gray-800 h-80"></div>
          <div className="contact__adress w-full md:w-1/2 bg-red-600 h-80"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
