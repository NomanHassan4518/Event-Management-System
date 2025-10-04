import React from "react";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-16 h-16 border-4 border-t-[#ce1446] border-gray-200 rounded-full animate-spin"></div>
      <p className="mt-2 text-white  font-medium">Loading...</p>
    </div>
  );
};

export default Spinner;
