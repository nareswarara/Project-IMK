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
  const [startIndex, setStartIndex] = useState(0);

  const handleScroll = (direction) => {
    const newStartIndex =
      direction === "right"
        ? Math.min(startIndex + 1, dataFakultas.length - 3)
        : Math.max(startIndex - 1, 0);

    setStartIndex(newStartIndex);
  };

  return (
    <div className="w-full mb-40 mt-24 text-cust-primary400 font-montserrat">
      <div className="w-fit mx-auto text-4xl font-bold mb-10">Fakultas</div>
      <div className="flex overflow-x-auto mt-20 w-9/12 mx-auto">
        {dataFakultas.map((fakultas, index) => (
          <div key={index} className="flex-shrink-0 lg:ml-4 lg:mr-4">
            <div className="text-center text-2xl font-semibold">
              {fakultas.nama}
            </div>

            <img
              src={fakultas.img}
              alt={fakultas.nama}
              className="lg:w-full w-9/12 mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fakultas;
