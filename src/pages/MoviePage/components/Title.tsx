import { MovieDataType } from "../../../types/HomePageTypes";

interface TitleProps {
  data: MovieDataType;
}

const Title: React.FC<TitleProps> = ({ data }) => {
  return (
    <div className="col-span-2 bg-gradient-to-b from-[#292727] to-gray-600 rounded-lg">
      <div className="grid grid-cols-2 gap-2 p-5">
        <div className="row-span-2">
          <h1 className="text-3xl text-slate-200 font-serif">{`${data.title} (${data.releaseYear})`}</h1>
        </div>
        <div className="row-span-2">
          <div className="text-right text-slate-200">
            <span>{data.duration}</span>
          </div>
        </div>
      </div>
      <div className="p-5 text-slate-200">{data.summary}</div>
    </div>
  );
};

export default Title;
