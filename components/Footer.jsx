import React from "react";
import { FaHeart } from "react-icons/fa";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div>
      <p className="text-white text-sm text-center flex justify-center items-center gap-2 py-4">
        <FaHeart className="text-red-600" /> Build By Bishal Gurung
        <br />
        &copy; {currentYear}
      </p>
    </div>
  );
}

export default Footer;
