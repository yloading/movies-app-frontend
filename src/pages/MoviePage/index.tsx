import { useState } from "react";
import { MovieDataType } from "../../types/HomePageTypes"; // Importing the MovieDataType type from the types folder
import TopStars from "./components/TopStars"; // Importing the TopStars component
import Title from "./components/Title"; // Importing the Title component
import MovieDetails from "./components/MovieDetails"; // Importing the MovieDetails component

// Interface to define the expected props for MoviePage component
interface MovieProps {
  data: MovieDataType; // The data prop must be of type MovieDataType
}

// The MoviePage component is a React functional component that takes in MovieProps as props
const MoviePage: React.FC<MovieProps> = ({ data }) => {
  // useState hook to manage the state of whether all top stars should be shown
  const [showAllTopStars, setShowAllTopStars] = useState<boolean>(false);

  // Function to get the top stars based on the state of showAllTopStars
  const getTopStars = () => {
    if (!showAllTopStars) {
      // If showAllTopStars is false, only return the top 10 stars
      const top10Stars: { actorName: string; characterName: string }[] = [];
      data.topStars.forEach((stars, index) => {
        if (index <= 9) {
          top10Stars.push(stars);
        }
      });

      return top10Stars;
    } else {
      // If showAllTopStars is true, return all the stars
      return data.topStars;
    }
  };

  return (
    // Grid layout to display the TopStars, Title, and MovieDetails components
    <div className="grid grid-rows-3 grid-flow-col gap-4">
      {/* TopStars component which shows the stars with the ability to toggle between top 10 or all */}
      <TopStars
        getTopStars={getTopStars}
        showAllTopStars={showAllTopStars}
        setShowAllTopStars={setShowAllTopStars}
      />
      {/* Title component to display the movie title */}
      <Title data={data} />
      {/* MovieDetails component to display detailed information about the movie */}
      <MovieDetails data={data} />
    </div>
  );
};

export default MoviePage;
