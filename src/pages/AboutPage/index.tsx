import Accordion from "../../components/AccordionComponent";
import { ITEMS } from "./constants";

function AboutPage() {
  return (
    <div>
      <h1 className="text-xl mb-5 dark:text-slate-200 font-serif font-bold text-gray-700">
        Welcome to MovieScoreComparer!
      </h1>
      <Accordion items={ITEMS} defaultOpenIndex={1} isOpenMultiple />
    </div>
  );
}

export default AboutPage;
