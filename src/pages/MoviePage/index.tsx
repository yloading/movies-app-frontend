import { useState } from "react";
import { MovieDataType } from "../../types/HomePageTypes";

interface MovieProps {
  data: MovieDataType;
}
const MoviePage: React.FC<MovieProps> = ({ data }) => {
  const [showAllTopStars, setShowAllTopStars] = useState<boolean>(false);

  const getTopStars = () => {
    if (!showAllTopStars) {
      const top10Stars: { actorName: string; characterName: string }[] = [];
      data.topStars.forEach((stars, index) => {
        if (index <= 9) {
          top10Stars.push(stars);
        }
      });

      return top10Stars;
    } else {
      return data.topStars;
    }
  };
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4">
      <div className="row-span-3 bg-gradient-to-tr from-gray-600 to-gray-500 rounded-lg p-3">
        <h1 className="text-2xl text-slate-200">Top Stars</h1>
        <div className="grid grid-cols-2 gap-3 mt-4">
          {getTopStars().map((star) => (
            <>
              <div className="bg-gradient-to-br from-gray-500 to-gray-400 text-white p-2 rounded-md">
                <p className="">{star?.actorName}</p>
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
      <div className="col-span-2 bg-[#B8860B] rounded-lg">
        <div className="grid grid-cols-2 gap-2 p-5">
          <div className="row-span-2">
            <h1 className="text-3xl text-slate-200">{`${data.title} (${data.releaseYear})`}</h1>
          </div>
          <div className="row-span-2">
            <div className="text-right text-slate-200">
              <span>{data.duration}</span>
            </div>
          </div>
        </div>
        <div className="p-5 text-slate-200">{data.summary}</div>
      </div>
      <div className="row-span-2 col-span-2 bg-[#333333] p-5 rounded-lg">
        <div className="grid grid-cols-5 gap-2">
          {data.categories.map((category) => (
            <div className="text-white border border-slate-300 text-center py-2 rounded-full text-xs bg-gray-700">
              {category}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-3 mt-10">
          <div className="bg-[#E6E6FA] p-2 rounded-md">
            <p className="">{data.director}</p>
            <span className="text-xs">Director</span>
          </div>
          {data.writers.map((writer) => (
            <div className="bg-[#E6E6FA] text-gray-700 p-2 rounded-md font-serif">
              <p className="">{writer}</p>
              <span className="text-xs ">Writer</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
