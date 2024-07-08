import React from "react";
import { useRouteError,Link} from "react-router-dom";


const ErrorPage = () => {
  const error = useRouteError();


  if (error.status === 404) {
    return (

        <div>
          <img src={img} alt="not found" />
          <h3>Ohh! Page not found</h3>
          <p>We can not seem to find the page you are looking for </p>
          <Link to="/">back home</Link>
        </div>
 
    );
  }
  return (
    <div>
      <h1>Something went wrong </h1> <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorPage;
