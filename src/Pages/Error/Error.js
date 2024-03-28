import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <p>Hello there is an eror which is {error.message}</p>
      <Link to="/">Pess here to Go To the Home</Link>
    </div>
  );
};

export default Error;
