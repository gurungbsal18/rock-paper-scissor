import React from "react";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <p className="text-white text-sm flex justify-center items-center gap-2 py-4">
        <FaHeart className="text-red-600" /> Build By Bishal Gurung
      </p>
    </div>
  );
}

export default Footer;
