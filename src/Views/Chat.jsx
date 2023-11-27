import { Phone, MoreHorizontal, Paperclip } from "react-feather";

const Chat = () => {
  return (
    <>
      <div className="w-full font-montserrat pt-20">
        <div className="w-11/12 mx-auto">
          <div className="text-cust-primary500 text-3xl font-bold mb-5">
            Rekomendasi Akademik
          </div>
          <div className="text-cust-primary500 font-medium mb-10">
            Dengan Konsultasi Bersama Dosen Pengampu
          </div>
        </div>
        <div className="w-10/12 mx-auto">
          <div className="text-cust-primary400 font-bold mb-5">
            Mahardeka Tri Ananta, S.Kom., M.Sc., M.T.
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <div className="w-4 h-4 bg-green-500 rounded-full my-auto"></div>
              <div className="text-gray-500 ml-2">Online</div>
            </div>
            <div className="flex">
              <Phone />
              <MoreHorizontal className="ml-5" />
            </div>
          </div>
        </div>
        <div className="w-11/12 h-[1px] bg-gray-500 mx-auto my-10"></div>
        <div className="w-10/12 mx-auto mb-10">
          <div className="bg-cust-primary350 text-white text-sm px-4 py-2 rounded-t-lg rounded-bl-lg xl:w-3/12 lg:w-4/12 sm:w-6/12 w-11/12 ml-auto">
            Selamat pagi, Pak Deka. Saya ingin berkonsultasi tentang nilai anak
            saya yang mengalami penurunan akademik
          </div>
          <div className="w-fit ml-auto text-gray-500 text-sm my-2">
            08:45 WIB
          </div>
          <div className=" text-cust-primary350 bg-gray-200 text-sm px-4 py-2 rounded-t-lg rounded-br-lg xl:w-3/12 lg:w-4/12 sm:w-6/12 w-11/12 mr-auto">
            Selamat pagi, Pak Deka. Saya ingin berkonsultasi tentang nilai anak
            saya yang mengalami penurunan akademik
          </div>
          <div className="w-fit mr-auto text-gray-500 text-sm my-2">
            09:10 WIB
          </div>
          <div className="w-full relative mt-32 overflow-hidden">
            <input
              type="text"
              placeholder="Tulis Pesan di sini ....."
              className=" border-[1px] lg:text-base text-xs border-gray-500 rounded-full text-cust-primary700 w-full h-full py-4 lg:px-8 px-2"
            />
            <Paperclip className="absolute lg:top-4 top-3 lg:right-36 right-28" />

            <button className="absolute lg:top-[6px] top-3 right-5 bg-cust-primary300 text-white lg:px-8 px-4 lg:py-2 rounded-full">
              Kirim
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
