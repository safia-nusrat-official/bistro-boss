import React from "react";

const SectionTitle = ({ heading, sub_heading, dark = true }) => {
  return (
    <div className="flex flex-col gap-2 mb-6 items-center">
      <p className="text-yellow-400 italic font-medium">---{sub_heading}---</p>
      {dark ? (
        <div className="text-gray-700 text-center py-4 px-1/2 md:px-28 border-y-2 border-slate-400 text-4xl font-semibold font-clash-display">
          {heading}
        </div>
      ) : (
        <div className="text-white text-center py-4 md:px-28 border-y-2 border-white text-4xl font-semibold font-clash-display">
          {heading}
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
