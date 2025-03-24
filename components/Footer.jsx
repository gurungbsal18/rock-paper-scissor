import React from "react";
import { FaHeart } from "react-icons/fa";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-white py-4">
        <div className="flex items-center gap-2 justify-center">
          <FaHeart className="text-red-600" />
          <p>Build By Bishal Gurung</p>
        </div>
        <p>&copy; {currentYear}</p>
      </div>
    </div>
  );
}

export default Footer;
