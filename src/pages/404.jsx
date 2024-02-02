import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-3">
      <h1 className="font-bold text-5xl text-slate-800">Ooopss...</h1>
      <p className="text-slate-400 text-xl">
        Sorry, an unexpected error has occured
      </p>
      <p className="text-slate-400 text-xl">
        {error.statusText || error.message}
      </p>
    </div>
  );
};

export default ErrorPage;
