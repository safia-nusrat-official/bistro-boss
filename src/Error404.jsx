import { Link, useRouteError } from "react-router-dom";
import img from "./assets/404.gif";
import Btn from "./components/Btn";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="p-8 pt-0 font-clash-display grid place-items-center"
    >
      <img src={img} alt="" className="md:w-1/2" />
      <h1 className="text-6xl font-semi-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        {" "}
        <Btn>Back to Home?</Btn>
      </Link>
    </div>
  );
}
