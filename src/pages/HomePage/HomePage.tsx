import { ReactElement, useEffect, useMemo, useState } from "react";
import Accordion from "../../components/AccordionComponent";
import Toggle from "../../components/ToggleComponent";
import MoviePage from "../MoviePage";
import NoData from "../../components/NoDataComponent";
import AccordionSkeleton from "../../components/SpinnerComponent";
import { MovieDataType } from "../../types/HomePageTypes";

/**
 * HomePage Component
 *
 * This functional component renders a homepage that includes an Accordion and a Toggle switch.
 * The Toggle allows the user to decide if multiple Accordion items can be opened at the same time.
 * This page demonstrates the usage of state management in React and the composition of multiple
 * components (Accordion and Toggle) within a functional component.
 *
 */

function HomePage() {
  const [isOpenMultiple, setIsOpenMultiple] = useState<boolean>(false);
  const [movies, setMovies] = useState<Array<MovieDataType>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8001/api/movies"); // Replace with your API URL
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMovies(data.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const items = useMemo(() => {
    const arr: { title: string; content: string | ReactElement }[] = [];
    if (movies.length > 0) {
      movies.forEach((movie) => {
        arr.push({ title: movie.title, content: <MoviePage data={movie} /> });
      });
    }

    return arr;
  }, [movies]);

  return (
    <div>
      {loading ? (
        <AccordionSkeleton count={6} />
      ) : movies.length > 0 ? (
        <div>
          <div className="mb-3">
            <Toggle
              checked={isOpenMultiple}
              onChange={() => setIsOpenMultiple((prev) => !prev)}
              label="Multiple open accordion"
            />
          </div>

          <Accordion items={items} isOpenMultiple={isOpenMultiple} />
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
}

export default HomePage;
