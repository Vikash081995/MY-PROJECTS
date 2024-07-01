import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let errorMessage = "";
  if (typeof error === "object" && error !== null && "statusText" in error) {
    errorMessage = error.statusText as string;
  }
  return (
    <div>
      <h1>Something went wrong </h1> <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorPage;
