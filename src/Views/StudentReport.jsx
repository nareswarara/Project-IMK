import { useState } from "react";

const data = [
  {
    smt1: [
      {
        nama: "Basis Data",
        nilai: "A",
        ph: 80,
        q1: 85,
        q2: 80,
        uts: 80,
        uas: 90,
      },
      {
        nama: "Basis Data",
        nilai: "A",
        ph: 80,
        q1: 85,
        q2: 80,
        uts: 80,
        uas: 90,
      },
      {
        nama: "Basis Data",
        nilai: "A",
        ph: 80,
        q1: 85,
        q2: 80,
        uts: 80,
        uas: 90,
      },
      {
        nama: "Basis Data",
        nilai: "A",
        ph: 80,
        q1: 85,
        q2: 80,
        uts: 80,
        uas: 90,
      },
      {
        nama: "Basis Data",
        nilai: "A",
        ph: 80,
        q1: 85,
        q2: 80,
        uts: 80,
        uas: 90,
      },
      {
        nama: "Basis Data",
        nilai: "A",
        ph: 80,
        q1: 85,
        q2: 80,
        uts: 80,
        uas: 90,
      },
    ],
    smt2: [
      {
        nama: "Aljabar Liner",
        nilai: "A",
        ph: 80,
        q1: 85,
        q2: 80,
        uts: 80,
        uas: 90,
      },
      {
        nama: "Aljabar Linear",
        nilai: "A",
        ph: 80,
        q1: 85,
        q2: 80,
        uts: 80,
        uas: 90,
      },
      {
        nama: "Aljabar Linear",
        nilai: "A",
        ph: 80,
        q1: 85,
        q2: 80,
        uts: 80,
        uas: 90,
      },
      {
        nama: "Aljabar Linear",
        nilai: "A",
        ph: 80,
        q1: 85,
        q2: 80,
        uts: 80,
        uas: 90,
      },
      {
        nama: "Aljabar Linear",
        nilai: "A",
        ph: 80,
        q1: 85,
        q2: 80,
        uts: 80,
        uas: 90,
      },
      {
        nama: "Aljabar Linear",
        nilai: "A",
        ph: 80,
        q1: 85,
        q2: 80,
        uts: 80,
        uas: 90,
      },
    ],
    smt3: [
      {
        nama: "Interaksi Manusia dan Komputer",
        nilai: "A",
        ph: 80,
        q1: 85,
        q2: 80,
        uts: 80,
        uas: 90,
      },
      {
        nama: "Interaksi Manusia dan Komputer",
        nilai: "A",
        ph: 80,
        q1: 85,
        q2: 80,
        uts: 80,
        uas: 90,
      },
      {
        nama: "Interaksi Manusia dan Komputer",
        nilai: "A",
        ph: 80,
        q1: 85,
        q2: 80,
        uts: 80,
        uas: 90,
      },
      {
        nama: "Interaksi Manusia dan Komputer",
        nilai: "A",
        ph: 80,
        q1: 85,
        q2: 80,
        uts: 80,
        uas: 90,
      },
      {
        nama: "Interaksi Manusia dan Komputer",
        nilai: "A",
        ph: 80,
        q1: 85,
        q2: 80,
        uts: 80,
        uas: 90,
      },
      {
        nama: "Interaksi Manusia dan Komputer",
        nilai: "A",
        ph: 80,
        q1: 85,
        q2: 80,
        uts: 80,
        uas: 90,
      },
    ],
  },
];

const StudentReport = () => {
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
            Laporan Hasil Studi
          </div>
          <div className="w-full md:flex pb-10">
            <div className="text-lg font-medium mt-4 mb-4 md:mb-0">
              Kartu Hasil Studi
            </div>
            <div className="md:ml-auto  w-[160px] border-2 border-cust-primary400 flex px-4 rounded-lg md:py-0 py-2">
              <select
                className="w-full text-cust-primary400 my-auto"
                value={smt}
                onChange={handleSemesterChange}
              >
                <option value={1}>Semester 1</option>
                <option value={2}>Semester 2</option>
                <option value={3}>Semester 3</option>
              </select>
            </div>
          </div>
          <div className="md:flex flex-wrap w-full">
            {selectedData.map((item, index) => (
              <div className="md:w-6/12 sm:w-10/12  mx-auto mb-10" key={index}>
                <div className="sm:w-10/12 mx-auto">
                  <div
                    className={`${
                      index == 1 || index == 2 || index == 5
                        ? "bg-cust-primary250"
                        : "bg-cust-primary150"
                    } w-full py-2 rounded-xl`}
                  >
                    <div className="w-10/12 mx-auto flex justify-between">
                      <div
                        className={`${
                          index == 1 || index == 2 || index == 5
                            ? "text-white"
                            : ""
                        } text-xl font-bold my-auto`}
                      >
                        {item.nama}
                      </div>
                      <div className="w-[60px] h-[60px] rounded-full text-3xl bg-white text-black flex items-center">
                        <div className="w-fit mx-auto mb-1">{item.nilai}</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-10/12 mx-auto font-medium mt-3 mb-1 flex justify-between">
                    <div>Presensi Kehadiran</div>
                    <div className="mr-5">{item.ph}</div>
                  </div>
                  <div className="w-10/12 mx-auto font-medium mb-1 flex justify-between">
                    <div>Quiz 1</div>
                    <div className="mr-5">{item.q1}</div>
                  </div>
                  <div className="w-10/12 mx-auto font-medium mb-1 flex justify-between">
                    <div>Quiz 2</div>
                    <div className="mr-5">{item.q2}</div>
                  </div>
                  <div className="w-10/12 mx-auto font-medium mb-1 flex justify-between">
                    <div>Ujian Tengah Semester</div>
                    <div className="mr-5">{item.uts}</div>
                  </div>
                  <div className="w-10/12 mx-auto font-medium mb-1 flex justify-between">
                    <div>Ujian Akhir Semester</div>
                    <div className="mr-5">{item.uas}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentReport;
