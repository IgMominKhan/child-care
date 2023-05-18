import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <main className=" h-screen  flex items-center  justify-center text-center">
      <div className="space-y-7 italic">
        <h1 className="text-5xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <p>
          Are you a developer?{" "}
          <a
            target="_blank"
            href={`https://www.google.com/search?q=${error.message || error.statusText
              }`}
            className="text-green-500"
          >
            Click here
          </a> 
          for solution?
        </p>
      </div>
    </main>
  );
};

export default ErrorPage;
