import { Calendar } from "primereact/calendar";
import { useState } from "react";

const Jadwal = () => {
  const [date, setDate] = useState(null);
  return (
    <>
      <div className="w-full pt-20 pb-10 font-montserrat">
        <div className="sm:w-10/12 w-11/12 mx-auto">
          <div className="text-cust-primary500 text-3xl font-bold">Jadwal</div>
          <div className="text-lg font-medium my-2">Kalendar</div>
          <div className="w-full sm:flex">
            <div className="sm:w-6/12 sm:mx-0 w-10/12 mx-auto sm:my-0 my-3 ">
              <Calendar
                value={date}
                onChange={(e) => setDate(e.value)}
                inline
                className="w-11/12  "
              />
            </div>
            <div className="sm:w-6/12 ml-10 mt-10 sm:mt-0">
              <div className="flex mb-8">
                <div className="w-[30px] h-[30px] bg-purple-300 rounded-full my-auto"></div>
                <div className=" ml-5">
                  <div className="font-bold text-sm">Bimbingan Lomba UI/UX</div>
                  <div className="text-sm font-medium">5 Oktober 2023</div>
                </div>
              </div>
              <div className="flex my-8">
                <div className="w-[30px] h-[30px] bg-purple-300 rounded-full my-auto"></div>
                <div className=" ml-5">
                  <div className="font-bold text-sm">Bimbingan Lomba UI/UX</div>
                  <div className="text-sm font-medium">5 Oktober 2023</div>
                </div>
              </div>
              <div className="flex my-8">
                <div className="w-[30px] h-[30px] bg-purple-300 rounded-full my-auto"></div>
                <div className=" ml-5">
                  <div className="font-bold text-sm">Bimbingan Lomba UI/UX</div>
                  <div className="text-sm font-medium">5 Oktober 2023</div>
                </div>
              </div>
              <div className="flex my-8">
                <div className="w-[30px] h-[30px] bg-purple-300 rounded-full my-auto"></div>
                <div className=" ml-5">
                  <div className="font-bold text-sm">Bimbingan Lomba UI/UX</div>
                  <div className="text-sm font-medium">5 Oktober 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jadwal;
