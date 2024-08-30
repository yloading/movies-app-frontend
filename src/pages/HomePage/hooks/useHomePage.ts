import { useEffect, useState } from "react";
import { MovieDataType } from "../../../types/HomePageTypes";

/**
 * useHomePage Hook
 *
 * This custom hook manages the state and logic for fetching movie data for the homepage.
 * It handles the loading state, fetching data from an API, and managing the list of movies.
 *
 * @returns {Object} An object containing the movie data and the loading state.
 * - `movies`: An array of movies fetched from the API.
 * - `loading`: A boolean indicating whether the data is currently being loaded.
 */

export const useHomePage = () => {
  // State to store the list of movies fetched from the API
  const [movies, setMovies] = useState<Array<MovieDataType>>([]);

  // State to track the loading status
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect hook to trigger the data fetching when the component using this hook mounts
  useEffect(() => {
    fetchMovies();
  }, []);

  /**
   * fetchMovies
   *
   * This async function is responsible for fetching movie data from the API.
   * It updates the `movies` state with the fetched data and handles the loading state.
   */
  const fetchMovies = async () => {
    try {
      setLoading(true); // Set loading to true before starting the fetch

      // Fetching movie data from the API
      const response = await fetch("http://localhost:8001/api/movies");
      if (!response.ok) {
        throw new Error("Network response was not ok"); // Handle non-2xx HTTP responses
      }

      const data = await response.json(); // Parse the JSON response

      setMovies(data.data); // Update the movies state with the fetched data
    } catch (error) {
      console.log(error); // Log any errors that occur during the fetch
      setLoading(false); // Set loading to false if an error occurs
    } finally {
      setLoading(false); // Ensure loading is set to false once the fetch completes
    }
  };

  // Return the movies and loading state to the component using this hook
  return {
    movies,
    loading,
  };
};
