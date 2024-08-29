export type MovieDataType = {
  id: string | null;
  title: string;
  scores: {
    imdb: { rating: string | number; reviews: string };
    rottenTomato?: { rating: string | number; reviews: string };
    metaCritic?: { rating: string | number; reviews: string };
  };
  contentRating: string;
  releaseDate: string;
  releaseYear: string;
  duration: string;
  categories: string[];
  summary: string;
  director: string;
  writers: string[];
  stars: string[];
  topStars: { actorName: string; characterName: string }[];
  photos: string[];
};
