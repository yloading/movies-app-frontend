import { ReactElement, useMemo, useState } from "react";
import Accordion from "../../components/AccordionComponent";
import Toggle from "../../components/ToggleComponent";
import MoviePage from "../MoviePage";
import NoData from "../../components/NoDataComponent";
import AccordionSkeleton from "../../components/AccordionSkeletonComponent";
import { useHomePage } from "./hooks/useHomePage";

/**
 * HomePage Component
 *
 * This functional component renders the homepage, which includes an Accordion and a Toggle switch.
 * The Toggle allows the user to decide if multiple Accordion items can be opened simultaneously.
 * The component demonstrates the usage of React state management, conditional rendering,
 * and the composition of multiple components within a functional component.
 */

function HomePage() {
  // State to manage whether multiple Accordion items can be opened at the same time
  const [isOpenMultiple, setIsOpenMultiple] = useState<boolean>(false);

  // Custom hook to fetch and manage movie data along with loading state
  const { movies, loading } = useHomePage();

  // Memoized computation of items to be used in the Accordion
  const items = useMemo(() => {
    const arr: { title: string; content: string | ReactElement }[] = [];

    if (movies.length > 0) {
      movies.forEach((movie) => {
        arr.push({ title: movie.title, content: <MoviePage data={movie} /> }); // Adding movie data to the items array
      });
    }

    return arr;
  }, [movies]); // Dependency on the movies array

  return (
    <div>
      {loading ? ( // Conditional rendering based on loading state
        <AccordionSkeleton count={6} /> // Show skeleton loader when data is loading
      ) : movies.length > 0 ? ( // If not loading and there are movies
        <div>
          <div className="mb-3">
            {/* Toggle component to switch between allowing single or multiple open Accordion items */}
            <Toggle
              checked={isOpenMultiple}
              onChange={() => setIsOpenMultiple((prev) => !prev)} // Toggle the isOpenMultiple state
              label="Multiple open accordion"
            />
          </div>

          {/* Accordion component with items and toggleable multiple open feature */}
          <Accordion items={items} isOpenMultiple={isOpenMultiple} />
        </div>
      ) : (
        <NoData /> // Show NoData component when there are no movies to display
      )}
    </div>
  );
}

export default HomePage;
