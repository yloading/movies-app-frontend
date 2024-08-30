import { MovieDataType } from "../../../types/HomePageTypes";
import StarSVG from "../../../assets/star.svg";

interface MovieDetailsProps {
  data: MovieDataType;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ data }) => {
  return (
    <div className="row-span-2 col-span-2 bg-[#333333] p-5 rounded-lg">
      <div className="grid grid-cols-5 gap-2">
        {data.categories.map((category) => (
          <div className="text-white border border-slate-300 text-center py-2 rounded-full text-xs bg-gray-700 hover:bg-gray-600">
            {category}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-3 mt-7 font-serif">
        <div className="bg-[#E6E6FA] p-2 rounded-md text-gray-700">
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
      <div className="grid grid-cols-3 gap-3 mt-5">
        <div className="col-span-1 border border-yellow-600 text-slate-200 p-3 rounded-2xl text-center">
          <h2 className="text-xs">
            <div>IMDb RATING Score</div>
            <span className="text-2xl font-serif">
              <img src={StarSVG} className="h-5 max-w-sm inline mb-1" />{" "}
              {data.scores.imdb.rating}
            </span>{" "}
            / 10
          </h2>
          <h3 className="text-xs">
            Based on {data.scores.imdb.reviews} reviews
          </h3>
          <div className="mt-2">
            <a
              href={data.scores.imdb.link}
              target="_blank"
              className="bg-yellow-600 py-1 px-5 rounded-md text-xs text-gray-800"
            >
              View Movie
            </a>
          </div>
        </div>
        <div className="col-span-1 border border-[#FA3209] text-slate-200 p-3 rounded-2xl text-center">
          <h2 className="text-xs">
            <div>Rotten Tomatoes Tomatometer</div>
            <span className="text-2xl font-serif">
              <img src={StarSVG} className="h-5 max-w-sm inline mb-1" />{" "}
              {data.scores.rottenTomato.rating}
            </span>
          </h2>
          <h3 className="text-xs">
            Based on {data.scores.rottenTomato.reviews}
          </h3>
          <div className="mt-2">
            <a
              href={data.scores.rottenTomato.link}
              target="_blank"
              className="bg-[#FA3209] py-1 px-5 rounded-md text-xs"
            >
              View Movie
            </a>
          </div>
        </div>
        <div className="col-span-1 border border-[#00CE7A] text-slate-200 p-3 rounded-2xl text-center">
          <h2 className="text-xs">
            <div>MetaCritic Critic Score</div>
            <span className="text-2xl font-serif">
              <img src={StarSVG} className="h-5 max-w-sm inline mb-1" />{" "}
              {data.scores.metaCritic.rating}
            </span>
          </h2>
          <h3 className="text-xs">{data.scores.metaCritic.reviews}</h3>
          <div className="mt-2">
            <a
              href={data.scores.metaCritic.link}
              target="_blank"
              className="bg-[#00CE7A] py-1 px-5 rounded-md text-xs text-gray-800"
            >
              View Movie
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
