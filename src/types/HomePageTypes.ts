export type MovieDataType = {
  id: string | null;
  title: string;
  scores: {
    imdb: { rating: string; reviews: string; link: string };
    rottenTomato: { rating: string; reviews: string; link: string };
    metaCritic: { rating: string; reviews: string; link: string };
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
