import React from "react";

const Btn = ({ children, dark = true }) => {
  if (dark) {
    return (
      <button className="uppercase btn border-b-4 mt-4 hover:-translate-y-3 hover:border-b-4 border-slate-700 hover:border-slate-700">
        {children}
      </button>
    );
  }else if(!dark){
    return (
      <button className="uppercase bg-black/5 text-[#fafafa] btn border-t-0 border-r-0 border-l-0 border-b-4 mt-4 hover:-translate-y-3 hover:border-b-4 border-[#fafafa] hover:bg-black/15 hover:border-[#fafafa] ">
        {children}
      </button>
    );
  }
};

export default Btn;
