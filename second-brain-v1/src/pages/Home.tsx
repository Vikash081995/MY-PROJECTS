import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>this is personal digital hub for students </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis modi
        ullam distinctio illum culpa, ut reiciendis velit qui? Rem quia
        obcaecati fuga. Laborum ducimus repellat velit? Blanditiis nesciunt
        officiis dolore.
      </p>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/preview">Preview without login </Link>
    </div>
  );
};

export default Home;
