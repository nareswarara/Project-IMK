import gambar from "../../assets/account.png";

const ProfileInfo = () => {
  return (
    <>
      <div className="w-full font-montserrat ">
        <div className="w-10/12 mx-auto md:flex py-10 pt-24">
          <img src={gambar} alt="" className="w-[200px] md:mx-0 mx-auto" />
          <div className="ml-10 mt-10 md:mt-0">
            <div className="font-bold text-2xl">Ahmad Sultan Mirzam Ambary</div>
            <div className="font-medium">225150207111031</div>
            <div className="text-cust-primary350 font-medium">
              Jurusan : Teknik Informatika
            </div>
            <div className="text-cust-primary350 font-medium">
              Fakultas : Ilmu Komputer
            </div>
            <div className="text-cust-primary350 font-medium">Jenjang : S1</div>
            <div className="text-cust-primary350 font-medium flex mt-10">
              Status : <p className="ml-1 text-green-500 font-bold">Aktif</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
