import ipk_icon from "../../assets/ipk_icon.svg";
import absensi_icon from "../../assets/absensi_icon.svg";
import aktivitas_icon from "../../assets/aktivitas_icon.svg";
import tugas_icon from "../../assets/tugas_icon.svg";
import grafik from "../../assets/grafik.svg";
import {
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Check,
  ChevronDown,
  Clock,
} from "react-feather";
import { Link } from "react-router-dom";

const dataDashboard = [
  {
    icon: ipk_icon,
    nama: "IPK",
    arrow: ArrowUp,
    nilai: "3.94",
    nilai2: "10.5%",
    link: "",
  },
  {
    icon: absensi_icon,
    nama: "Absence",
    arrow: ArrowDown,
    nilai: "96%",
    nilai2: "4%",
    link: "/absence",
  },
  {
    icon: aktivitas_icon,
    nama: "Student Activity",
    arrow: ArrowUp,
    nilai: "6",
    nilai2: "2",
    link: "/activity",
  },
  {
    icon: tugas_icon,
    nama: "Tasks",
    arrow: Check,
    nilai: "8",
    nilai2: "2",
    link: "/task",
  },
];

const Dashboard = () => {
  return (
    <>
      <div className="font-montserrat w-full py-10 px-10 bg-cover">
        <div className="flex flex-wrap w-full pt-4 sm:justify-between md:px-10 px-0">
          <div className="text-cust-primary500 w-11/12 font-bold text-4xl pt-5">
            Dashboard
          </div>
          {dataDashboard.map((item, i) => (
            <div
              className="xl:w-1/5 sm:w-fit w-5/12 mt-4 bg-cust-primary350 p-5 rounded-lg sm:mx-0 mx-auto"
              key={i}
            >
              <div className="flex justify-between">
                <img src={item.icon} alt="" className="sm:block hidden" />
                <div className="text-white sm:hidden block">{item.nama}</div>
                <div>
                  <Link to={item.link}>
                    <button>
                      <ArrowRight color="white" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="text-white pt-3 sm:block hidden">{item.nama}</div>
              <div className="sm:flex xl:w-fit sm:w-[200px]">
                <div className="text-white sm:text-5xl text-[10vw] font-bold pr-5">
                  {item.nilai}
                </div>
                <div
                  className={`${
                    item.arrow == ArrowUp
                      ? "bg-cust-success100"
                      : item.arrow == ArrowDown
                      ? "bg-cust-danger500"
                      : "bg-cust-success100"
                  }  flex justify-between h-fit px-2 rounded-full mt-3 w-fit`}
                >
                  {item.arrow == ArrowUp ? (
                    <ArrowUp className="text-cust-success450 font-bold w-3" />
                  ) : item.arrow == ArrowDown ? (
                    <ArrowDown className="text-cust-danger100 font-bold w-3" />
                  ) : (
                    <Check className="text-cust-success450 font-bold w-3" />
                  )}

                  <div
                    className={`${
                      item.arrow == ArrowUp
                        ? "text-cust-success450"
                        : item.arrow == ArrowDown
                        ? "text-cust-danger100"
                        : "text-cust-success450"
                    }  text-xs pl-1 font-semibold my-auto`}
                  >
                    {item.nilai2}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:flex mt-8">
          <div className="p-5 lg:w-7/12 w-full mx-auto shadow-[4px_4px_8px_0px_rgba(0,0,0,0.15)]">
            <div className="w-fit mx-auto text-cust-primary500 font-semibold text-2xl mb-10">
              IP Semester
            </div>
            <img src={grafik} alt="" className="mx-auto sm:w-9/12 mt-auto " />
          </div>
          <div className="p-5 lg:w-4/12 w-full lg:mt-0 mt-10 mx-auto shadow-[4px_4px_8px_0px_rgba(0,0,0,0.15)]">
            <div className="w-fit mr-auto text-cust-primary500 font-semibold text-2xl">
              Kalender
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">3 Kegiatan hari ini</div>
              <div className="flex">
                <div className="text-sm">Hari ini</div>{" "}
                <ChevronDown className="w-4" />
              </div>
            </div>
            <div className="w-10/12 bg-cust-primary350 rounded-lg p-5 mx-auto mt-5">
              <div className="text-white font-semibold sm:text-base text-sm">
                Basis Data
              </div>
              <div className="flex text-white ">
                <Clock className="sm:w-4 w-3" />
                <div className="sm:text-xs text-[10px] my-auto ml-2">
                  7.00 - 9.30, 3 sks
                </div>
              </div>
            </div>
            <div className="w-10/12 bg-cust-primary100 rounded-lg p-5 mx-auto mt-5">
              <div className="text-cust-primary350 font-semibold sm:text-base text-sm">
                Interaksi Manusia dan Komputer
              </div>
              <div className="flex text-cust-primary350">
                <Clock className="sm:w-4 w-3" />
                <div className="sm:text-xs text-[10px] my-auto ml-2">
                  10.00 - 11.30, 3 sks
                </div>
              </div>
            </div>
            <div className="w-10/12 bg-cust-primary100 rounded-lg p-5 mx-auto mt-5">
              <div className="text-cust-primary350 font-semibold sm:text-base text-sm">
                Kecerdasan Buatan
              </div>
              <div className="flex text-cust-primary350">
                <Clock className="sm:w-4 w-3" />
                <div className="sm:text-xs text-[10px] my-auto ml-2">
                  12.50 - 15.30, 3 sks
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
