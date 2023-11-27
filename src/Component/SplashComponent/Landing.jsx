import { Link } from "react-router-dom";
import background from "../../assets/bgSplash.svg";

const Landing = () => {
  return (
    <>
      <div
        className="xl:h-[90vh] lg:h-[80vh] md:h-[40vh] sm:h-[50vh] h-[80vh] font-montserrat xl:bg-contain bg-no-repeat bg-top"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="w-full xl:pt-32 lg:pt-20 sm:pt-16 pt-40 text-white">
          <div className="xl:text-7xl lg:text-6xl sm:text-3xl text-5xl font-bold w-fit mx-auto">
            SIMA UB
          </div>
          <div className="xl:text-4xl lg:text-3xl text-xl sm:w-fit w-10/12 text-center lg:pt-10 md:pt-6 sm:pt-4 pt-6 mx-auto font-medium">
            Sistem Informasi Monitoring Mahasiswa
          </div>
          <div className="xl:text-4xl lg:text-3xl text-xl w-fit text-center mx-auto font-medium">
            Universitas Brawijaya
          </div>

          <Link to="/login">
            <div className="sm:w-2/12 w-4/12 cursor-pointer text-center mx-auto hover:bg-transparent border-2 border-white hover:text-white duration-300 text-cust-primary400 bg-white font-bold lg:py-3 md:py-2 py-2 rounded-xl lg:mt-12 md:mt-8 sm:mt-4 mt-28">
              <buton className="lg:text-2xl sm:text-lg text-base">Masuk</buton>
            </div>
          </Link>
        </div>
      </div>
      <div className="lg:w-2/12 sm:w-4/12 w-5/12 h-1 bg-cust-primary400 mx-auto mb-10 mt-10"></div>
      <div className="lg:text-xl md:text-lg sm:text-base lg:w-6/12 sm:w-10/12 mx-auto text-cust-primary400 text-center mb-16">
        Memantau dan mengelola data mahasiswa serta menyediakan informasi
        terkait perkembangan akademik di lingkungan universitas. Dengan akses
        untuk orang tua mahasiswa.
      </div>
    </>
    //
  );
};

export default Landing;
