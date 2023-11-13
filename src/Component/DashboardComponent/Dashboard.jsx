import ipk_icon from "../../assets/ipk_icon.svg";
import absensi_icon from "../../assets/absensi_icon.svg";
import aktivitas_icon from "../../assets/aktivitas_icon.svg";
import tugas_icon from "../../assets/tugas_icon.svg";
import { ArrowRight, ArrowUp, ArrowDown, Check } from "react-feather";

const dataDashboard = [
  {
    icon: ipk_icon,
    nama: "IPK",
    arrow: ArrowUp,
    nilai: "3.94",
    nilai2: "10.5%",
  },
  {
    icon: absensi_icon,
    nama: "Absence",
    arrow: ArrowDown,
    nilai: "96%",
    nilai2: "4%",
  },
  {
    icon: aktivitas_icon,
    nama: "Student Activity",
    arrow: ArrowUp,
    nilai: "6",
    nilai2: "2",
  },
  {
    icon: tugas_icon,
    nama: "Tasks",
    arrow: Check,
    nilai: "8",
    nilai2: "2",
  },
];

const Dashboard = () => {
  return (
    <>
      <div className="font-montserrat w-full py-10 px-10">
        <div className="text-cust-primary500 w-11/12 font-bold text-4xl">
          Dashboard
        </div>
        <div className="flex flex-wrap w-full pt-4 sm:justify-between md:px-10 px-0">
          {dataDashboard.map((item, i) => (
            <div
              className="xl:w-1/5 sm:w-fit w-5/12 mt-4 bg-cust-primary350 p-5 rounded-lg sm:mx-0 mx-auto"
              key={i}
            >
              <div className="flex justify-between">
                <img src={item.icon} alt="" className="sm:block hidden" />
                <div className="text-white sm:hidden block">{item.nama}</div>
                <div>
                  <button>
                    <ArrowRight color="white" />
                  </button>
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
      </div>
    </>
  );
};

export default Dashboard;
