import React, { Dispatch, SetStateAction } from "react";

interface TopStarsProps {
  getTopStars: () => { actorName: string; characterName: string }[];
  setShowAllTopStars: Dispatch<SetStateAction<boolean>>;
  showAllTopStars: boolean;
}

const TopStars: React.FC<TopStarsProps> = ({
  getTopStars,
  showAllTopStars,
  setShowAllTopStars,
}) => {
  return (
    <div className="row-span-3 bg-gradient-to-tr from-gray-600 to-gray-500 rounded-lg p-3">
      <h1 className="text-2xl text-slate-200 font-serif">Top Stars</h1>
      <div className="grid grid-cols-2 gap-3 mt-4">
        {getTopStars().map((star) => (
          <>
            <div className="bg-gradient-to-br from-gray-500 to-gray-400 text-white p-2 rounded-md font-serif">
              <p>{star?.actorName}</p>
              <span className="text-xs">{star?.characterName}</span>
            </div>
          </>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="bg-gradient-to-br from-yellow-600 to-yellow-500 py-2 px-10 rounded-md mt-3"
          onClick={() => setShowAllTopStars((prev) => !prev)}
        >
          {showAllTopStars ? "See less" : "See more"}
        </button>
      </div>
    </div>
  );
};

export default TopStars;
