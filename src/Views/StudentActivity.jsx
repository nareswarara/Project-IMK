import gambar from "../assets/gambar.svg";
import hology from "../assets/hology.svg";

const organisasi = [
  {
    nama: "Badan Eksekutif Mahasiswa",
    tanggal: "15 Desember 2023",
  },
  {
    nama: "Badan Eksekutif Mahasiswa",
    tanggal: "15 Desember 2023",
  },
  {
    nama: "Badan Eksekutif Mahasiswa",
    tanggal: "15 Desember 2023",
  },
];

const kepanitiaan = [
  {
    nama: "Hology",
    tanggal: "15 Desember 2023",
  },
  {
    nama: "Hology",
    tanggal: "15 Desember 2023",
  },
  {
    nama: "Hology",
    tanggal: "15 Desember 2023",
  },
];

const StudentActivity = () => {
  return (
    <>
      <div className="w-full pt-20">
        <div className="w-10/12 mx-auto">
          <div className="text-cust-primary500 text-3xl font-bold mb-10">
            Kegiatan Mahasiswa
          </div>
          <div className="text-cust-primary500 text-xl font-bold mb-5">
            Organisasi
          </div>
          <div className="w-11/12 mx-auto flex flex-wrap mb-5">
            {organisasi.map((item, i) => (
              <div className="xl:w-4/12 mx-auto md:mb-0 mb-5 w-11/12" key={i}>
                <div className="xl:w-11/12 mx-auto">
                  <img src={gambar} alt="" className="w-8/12 mx-auto" />
                  <div className="text-cust-primary500 text-lg font-bold mb-2 mx-auto w-fit">
                    {item.nama}
                  </div>
                  <div className="flex justify-between xl:w-10/12 mx-auto xl:text-base text-sm">
                    <div>Masa Periode</div>
                    <div>{item.tanggal}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-cust-primary500 text-xl font-bold mb-5 mt-10">
            Kepanitiaan
          </div>
          <div className="w-11/12 mx-auto flex flex-wrap mb-5">
            {kepanitiaan.map((item, i) => (
              <div className="xl:w-4/12 mx-auto md:mb-0 mb-5 w-11/12" key={i}>
                <div className="xl:w-11/12 mx-auto">
                  <img src={hology} alt="" className="w-8/12 mx-auto" />
                  <div className="text-cust-primary500 text-lg font-bold mb-2 mx-auto w-fit">
                    {item.nama}
                  </div>
                  <div className="flex justify-between xl:w-10/12 mx-auto xl:text-base text-sm">
                    <div>Masa Periode</div>
                    <div>{item.tanggal}</div>
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

export default StudentActivity;
