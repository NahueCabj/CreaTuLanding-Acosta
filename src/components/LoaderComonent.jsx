import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-40">
      <div className="w-12 h-12 border-4 border-[#7b4b2a] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
