import gambar from "../../assets/berita.svg";
import { ArrowRight, Calendar } from "react-feather";

const dataBerita = [
  {
    gambar: gambar,
    date: "9 November 2023",
    deskripsi: " Semangat Hari Pahlawan, FISIP UB Canangkan Zona Integritas",
  },
  {
    gambar: gambar,
    date: "9 November 2023",
    deskripsi: " Semangat Hari Pahlawan, FISIP UB Canangkan Zona Integritas",
  },
  {
    gambar: gambar,
    date: "9 November 2023",
    deskripsi: " Semangat Hari Pahlawan, FISIP UB Canangkan Zona Integritas",
  },
];

const Berita = () => {
  return (
    <>
      <div className="font-montserrat w-full px-10 pb-10">
        <div className="text-cust-primary500 w-11/12 font-bold text-4xl">
          Berita
        </div>
        <div className="w-full flex flex-wrap pt-10 justify-between md:px-10 px-0">
          {dataBerita.map((item, i) => (
            <div
              className="xl:w-1/4 md:w-5/12 sm:w-8/12 w-9/12 drop-shadow-xl shadow-xl bg-white rounded-b-lg pb-4 lg:mt-4 mt-6 md:mx-0 mx-auto"
              key={i}
            >
              <img src={item.gambar} alt="" className="w-full" />
              <div className="font-bold w-10/12 mx-auto mt-4 md:text-xl text-lg">
                {item.deskripsi}
              </div>
              <div className="group flex mt-4 w-10/12 mx-auto cursor-pointer">
                <div className="text-sm group-hover:translate-x-0 -translate-x-4 opacity-0 group-hover:opacity-100 duration-300">
                  Selengkapnya
                </div>
                <ArrowRight className="-translate-x-24 group-hover:translate-x-8 duration-300" />
              </div>
              <div className="flex w-fit ml-auto mt-6 mr-4 ">
                <Calendar className="w-4 ml-auto" />
                <div className="ml-1"> {item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Berita;
