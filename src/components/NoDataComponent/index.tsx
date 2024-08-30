import React from "react";

const NoData: React.FC = () => {
  return (
    <div className="flex justify-center mt-36 items-center">
      <div className="p-28 rounded-xl shadow-lg dark:bg-gradient-to-r dark:from-[#B8860B] dark:to-[#9b8a60] bg-gradient-to-r from-blue-500 to-cyan-400">
        <h1 className="text-slate-200 text-center w-full text-xl">
          There are no data available at the moment
        </h1>
      </div>
    </div>
  );
};

export default NoData;
