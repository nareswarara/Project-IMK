import { Link } from "react-router-dom";
import background from "../assets/login.svg";

const Footer = () => {
  return (
    <>
      <div
        className="w-full px-4 bg-cover"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="bg-cust-primary400 rounded-t-xl w-full lg:px-14 px-7 py-7 text-white font-montserrat">
          <div className="flex">
            <div className="lg:w-6/12 w-full lg:text-left text-center">
              <div className="lg:text-2xl text-xl font-bold">SIMA UB</div>
              <div className="pt-4 font-semibold lg:text-base text-sm">
                Mahasiswa Universitas Brawijaya
              </div>
              <div className="lg:hidden block lg:text-2xl text-xl font-bold pt-12">
                Monitoring Mahasiswa
              </div>
              <div className="lg:hidden block pt-4 lg:text-base text-sm">
                Memantau dan mengelola data mahasiswa serta menyediakan
                informasi terkait perkembangan akademik di lingkungan
                universitas. Dengan akses untuk orang tua mahasiswa.
              </div>
              <div className="lg:pt-16 pt-12">Website</div>
              <Link to="https://ub.ac.id/id/" target="https://ub.ac.id/id/">
                <div className="text-sm pt-1">https://ub.ac.id/id/</div>
              </Link>
            </div>
            <div className="lg:w-6/12 lg:block hidden">
              <div className="text-2xl font-bold">Monitoring Mahasiswa</div>
              <div className="pt-4 text-justify">
                Memantau dan mengelola data mahasiswa serta menyediakan
                informasi terkait perkembangan akademik di lingkungan
                universitas. Dengan akses untuk orang tua mahasiswa.
              </div>
            </div>
          </div>
          <div className="w-full h-1 bg-white mt-6"></div>
          <div className="w-fit mx-auto pt-6 font-bold">
            Universitas Brawijaya, Malang
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
