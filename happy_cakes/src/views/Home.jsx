import "./Home.css";
import React from "react";
import Imagen from "../assets/img/muffins-02.png";

const Home = () => {
  return (
    <>
      <h2 className="bienvenido">Bienvenido a Happy Cake </h2>
      <p>el lugar de los pasteles felices</p>
      <div>
        <img src={Imagen} alt="" />
      </div>
    </>
  );
};

export default Home;
