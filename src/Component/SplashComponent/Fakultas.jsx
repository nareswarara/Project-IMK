import React, { useState } from "react";
import filkom from "../../assets/filkom.svg";

const dataFakultas = [
  {
    nama: "Ilmu Komputer1",
    img: filkom,
  },
  {
    nama: "Ilmu Komputer2",
    img: filkom,
  },
  {
    nama: "Ilmu Komputer3",
    img: filkom,
  },
  {
    nama: "Ilmu Komputer4",
    img: filkom,
  },
  {
    nama: "Ilmu Komputer5",
    img: filkom,
  },
];

const Fakultas = () => {
  return (
    <div className="md:w-8/12 mx-auto pb-24">
      <div className="carousel carousel-center rounded-box">
        {dataFakultas.map((item, i) => (
          <div className="carousel-item relative" key={i}>
            <div className="group absolute top-0 w-full h-full md:hover:bg-black md:hover:bg-opacity-10 md:duration-300  flex items-center bg-black bg-opacity-40">
              <div className="md:opacity-0 md:group-hover:opacity-100 duration-300 text-center w-full font-bold text-2xl text-white ">
                {item.nama}
              </div>
            </div>
            <img src={item.img} alt="Drink" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fakultas;
