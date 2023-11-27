import { useState } from "react";

const data = [
  {
    smt1: [
      {
        nama: "Basis Data",
        presentase: 100,
        tm: 20,
        hadir: 20,
        sakit: 0,
        izin: 0,
        alpha: 0,
      },
      {
        nama: "Basis Data",
        presentase: 100,
        tm: 20,
        hadir: 20,
        sakit: 0,
        izin: 0,
        alpha: 0,
      },
      {
        nama: "Basis Data",
        presentase: 100,
        tm: 20,
        hadir: 20,
        sakit: 0,
        izin: 0,
        alpha: 0,
      },
      {
        nama: "Basis Data",
        presentase: 100,
        tm: 20,
        hadir: 20,
        sakit: 0,
        izin: 0,
        alpha: 0,
      },
      {
        nama: "Basis Data",
        presentase: 100,
        tm: 20,
        hadir: 20,
        sakit: 0,
        izin: 0,
        alpha: 0,
      },
      {
        nama: "Basis Data",
        presentase: 100,
        tm: 20,
        hadir: 20,
        sakit: 0,
        izin: 0,
        alpha: 0,
      },
    ],
    smt2: [
      {
        nama: "Aljabar Liner",
        presentase: 100,
        tm: 20,
        hadir: 20,
        sakit: 0,
        izin: 0,
        alpha: 0,
      },
      {
        nama: "Aljabar Linear",
        presentase: 100,
        tm: 20,
        hadir: 20,
        sakit: 0,
        izin: 0,
        alpha: 0,
      },
      {
        nama: "Aljabar Linear",
        presentase: 100,
        tm: 20,
        hadir: 20,
        sakit: 0,
        izin: 0,
        alpha: 0,
      },
      {
        nama: "Aljabar Linear",
        presentase: 100,
        tm: 20,
        hadir: 20,
        sakit: 0,
        izin: 0,
        alpha: 0,
      },
      {
        nama: "Aljabar Linear",
        presentase: 100,
        tm: 20,
        hadir: 20,
        sakit: 0,
        izin: 0,
        alpha: 0,
      },
      {
        nama: "Aljabar Linear",
        presentase: 100,
        tm: 20,
        hadir: 20,
        sakit: 0,
        izin: 0,
        alpha: 0,
      },
    ],
    smt3: [
      {
        nama: "Interaksi Manusia dan Komputer",
        presentase: 100,
        tm: 20,
        hadir: 20,
        sakit: 0,
        izin: 0,
        alpha: 0,
      },
      {
        nama: "Interaksi Manusia dan Komputer",
        presentase: 100,
        tm: 20,
        hadir: 20,
        sakit: 0,
        izin: 0,
        alpha: 0,
      },
      {
        nama: "Interaksi Manusia dan Komputer",
        presentase: 100,
        tm: 20,
        hadir: 20,
        sakit: 0,
        izin: 0,
        alpha: 0,
      },
      {
        nama: "Interaksi Manusia dan Komputer",
        presentase: 100,
        tm: 20,
        hadir: 20,
        sakit: 0,
        izin: 0,
        alpha: 0,
      },
      {
        nama: "Interaksi Manusia dan Komputer",
        presentase: 100,
        tm: 20,
        hadir: 20,
        sakit: 0,
        izin: 0,
        alpha: 0,
      },
      {
        nama: "Interaksi Manusia dan Komputer",
        presentase: 100,
        tm: 20,
        hadir: 20,
        sakit: 0,
        izin: 0,
        alpha: 0,
      },
    ],
  },
];

const Absence = () => {
  const [smt, setSMT] = useState(1);
  const handleSemesterChange = (event) => {
    const selectedValue = parseInt(event.target.value);
    setSMT(selectedValue);
  };

  const getDataBySemester = (semester) => {
    if (semester === 1) {
      return data[0].smt1;
    } else if (semester === 2) {
      return data[0].smt2;
    } else if (semester === 3) {
      return data[0].smt3;
    } else {
      return [];
    }
  };

  const selectedData = getDataBySemester(smt);

  return (
    <>
      <div className="w-full pt-20 font-montserrat">
        <div className="w-10/12 mx-auto">
          <div className="text-cust-primary500 text-3xl font-bold">
            Rekap Presensi
          </div>
          <div className="w-full flex pb-10">
            <div className="text-lg font-medium mt-4">Hasil Rekap</div>
            <div className="ml-auto md:w-[160px] w-[120px] border-2 border-cust-primary400 flex md:px-4 rounded-lg">
              <select
                className=" text-cust-primary400 my-auto"
                value={smt}
                onChange={handleSemesterChange}
              >
                <option value={1}>Semester 1</option>
                <option value={2}>Semester 2</option>
                <option value={3}>Semester 3</option>
              </select>
            </div>
          </div>

          {selectedData.map((item, index) => (
            <div className="w-full mb-6 overflow-auto" key={index}>
              <div className="font-bold text-lg mb-3">{item.nama}</div>
              <table className="md:w-full w-[600px]">
                <thead className="bg-cust-primary350 text-white rounded-2xl">
                  <tr>
                    <th className="py-3 px-5 md:px-10">Presentase</th>
                    <th className="px-5 md:px-10">Tatap Muka</th>
                    <th className="px-5 md:px-10">Hadir</th>
                    <th className="px-5 md:px-10">Sakit</th>
                    <th className="px-5 md:px-10">Izin</th>
                    <th className="px-5 md:px-10">Alpha</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center font-bold py-4">
                      {item.presentase}%
                    </td>
                    <td className="text-center font-bold">{item.tm}</td>
                    <td className="text-center font-bold">{item.hadir}</td>
                    <td className="text-center font-bold">{item.sakit}</td>
                    <td className="text-center font-bold">{item.izin}</td>
                    <td className="text-center font-bold">{item.alpha}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Absence;
