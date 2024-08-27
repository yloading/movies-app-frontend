import Accordion from "../../components/AccordionComponent";

function AboutPage() {
  const ITEMS = [
    {
      title: "What We Do",
      content:
        "Our application aggregates movie scores from three popular movie rating websites, providing you with a consolidated view of how each movie is rated across these sources. By doing so, we aim to assist you in making more informed decisions about what to watch based on a variety of opinions.",
    },
    {
      title: "How It Works",
      content: `- Frontend: Built with React, our user interface is designed to be responsive and user-friendly, making it easy for you to search for movies and view their ratings.
               \n- Backend: Our backend is powered by Express and Node.js, handling data processing and server-side logic efficiently.
               \n- TypeScript: We use TypeScript to ensure that our code is robust and maintainable, providing a better development experience and reducing the risk of errors.`,
    },
    {
      title: "Data Source",
      content:
        "Please note that our application does not access or use official APIs from the movie rating websites. Instead, we utilize available data sources and scraping techniques to retrieve movie scores. This approach allows us to provide comparisons without needing direct access to each website's API.",
    },
    {
      title: "Author",
      content:
        "This project was developed by Marvie Yuki Marfil. With a passion of software engineering, I created MovieScoreComparer to simplify the process of comparing movie ratings and help users make better viewing choices.",
    },
  ];

  return (
    <div>
      <h1 className="text-xl mb-5 dark:text-white">
        Welcome to MovieScoreComparer!
      </h1>
      <Accordion items={ITEMS} defaultOpenIndex={1} isOpenMultiple />
    </div>
  );
}

export default AboutPage;
