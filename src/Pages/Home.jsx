import React from "react";
import About from "../Pages/About.jsx";
import Collection from "../Pages/Collection.jsx";
import Artist from "./Artist.jsx";
import Library from "./Library.jsx";
import Questions from "./Questions.jsx";

const Home = () => {
  return (
    <>
      <About />
      <Collection />
      <Artist />
      <Library />
      <Questions />
    </>
  );
};

export default Home;
