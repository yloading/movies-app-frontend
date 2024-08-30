import ErrorSvg from "../../assets/error.svg";

function PageError() {
  return (
    <div className="flex items-center justify-center flex-col h-[88vh]">
      <img src={ErrorSvg} className="h-32" />
      <h1 className="text-xl mt-5 dark:text-slate-200">
        Something went wrong, please try again later
      </h1>
    </div>
  );
}

export default PageError;
