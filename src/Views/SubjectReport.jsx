import { Link } from "react-router-dom";
import background from "../assets/bgSubjectReport.svg";

const SubjectReport = () => {
  return (
    <>
      <div
        className="h-screen flex items-center w-full bg-cover bg-no-repeat  py-20 relative mb-10 font-montserrat"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="w-10/12 mx-auto">
          <div className="text-5xl font-bold text-white">
            Interaksi Manusia dan Komputer
          </div>
          <div className="text-white mt-10 w-8/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero.
          </div>
          <div className="bg-white py-8 px-16 flex justify-between rounded-full w-10/12 mx-auto absolute bottom-10">
            <div className="font-bold">3 sks</div>
            <div className="font-bold">
              Mahardeka Tri Ananta, S.Kom., M.Sc., M.T.
            </div>
            <div className="font-bold">Wajib</div>
          </div>
        </div>
      </div>
      <div className="w-10/12 font-montserrat mx-auto py-20">
        <div className="text-3xl font-bold">Rekomendasi Akademik</div>
        <div className="w-6/12 mx-auto mt-10">
          <div className="font-bold text-lg">Perbaikan Nilai UTS</div>
          <div className=" text-sm text-gray-500">25 Oktober 2023 </div>
          <div className="mt-10 font-medium">Catatan Dosen :</div>
          <div className="text-justify mt-2 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero.
          </div>
          <div className="flex text-lg font-medium">
            <div>Materi Wireframe</div>
            <div className="ml-8">Materi Ergonomics</div>
          </div>
          <div className="ml-auto w-fit mt-5">
            <Link to="/chat">
              <button className="font-bold">Chat</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectReport;
