import { useEffect, useState } from "react";
import background from "../../assets/bgSplash.svg";

// Blom Responsive
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

const Landing = () => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const toggleBackground = () => {
      if (window.scrollY > 100) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
    window.addEventListener("scroll", toggleBackground);
    return () => {
      window.removeEventListener("scroll", toggleBackground);
    };
  }, []);

  return (
    <>
      <div className="relative h-screen">
        <img
          src={background}
          alt=""
          className={`${
            fixed ? `absolute top-[100px]` : "fixed"
          } w-full z-0 transition-all`}
        />
        <div className="w-full h-[70vh] flex items-center text-white z-10 absolute pl-20">
          <div className="w-full">
            <div className="lg:text-5xl text-3xl font-bold w-fit">SIMA UB</div>
            <div className="lg:text-3xl text-xl w-fit">
              Sistem Informasi Monitoring Mahasiswa Universitas Brawijaya
            </div>
            <div className="text-xl w-6/12 text-white mt-16">
              Memantau dan mengelola data mahasiswa serta menyediakan informasi
              terkait perkembangan akademik di lingkungan universitas. Dengan
              akses untuk orang tua mahasiswa.
            </div>
            <button className="w-full mt-16">
              <div className="w-3/12 bg-cust-primary400 text-white font-bold py-4 rounded-xl">
                Masuk
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
