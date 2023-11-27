import background from "../assets/login.svg";
import icon_apple from "../assets/apple_icon.png";
import icon_google from "../assets/google_icon.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div
        className="h-screen bg-cover flex items-center font-montserrat"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="xl:w-9/12 lg:w-10/12 w-full lg:flex mx-auto">
          <div className="lg:w-5/12 w-8/12 mx-auto">
            <div className="pb-2">Alamat Email</div>
            <input
              className="border-b-2 border-black w-full pl-2 pb-2"
              style={{ outline: "none", background: "transparent" }}
            />
            <div className="pb-2 pt-8">Sandi</div>
            <input
              style={{ outline: "none", background: "transparent" }}
              className="border-b-2 border-black w-full pl-2 pb-2"
              type="password"
            />
            <Link to="/dashboard">
              <button className="w-full mt-16">
                <div className="w-10/12 mx-auto bg-cust-primary400 text-white font-bold py-4 rounded-xl">
                  Masuk
                </div>
              </button>
            </Link>
          </div>
          <div className="lg:block flex lg:w-2/12 w-8/12 lg:mt-0 mt-16 mx-auto">
            <div className="lg:w-[0.8px] w-4/12 lg:h-24 h-[0.8px] bg-black mx-auto lg:mt-0 mt-3"></div>
            <div className="mx-auto w-fit lg:py-4">ATAU</div>
            <div className="lg:w-[0.8px] w-4/12 lg:h-24 h-[0.8px] bg-black mx-auto lg:mt-0 mt-3"></div>
          </div>
          <div className="lg:w-5/12 w-10/12 lg:mx-0 mx-auto">
            <button className="w-full mt-16">
              <div className="w-10/12 mx-auto border-black border-2 flex font-bold py-4 rounded-xl">
                <img src={icon_google} alt="" className="ml-4" />
                <div className="mx-auto lg:text-base text-sm">
                  Lanjutkan dengan Google
                </div>
              </div>
            </button>
            <button className="w-full mt-16">
              <div className="w-10/12 mx-auto border-black border-2 flex font-bold py-4 rounded-xl">
                <img src={icon_apple} alt="" className="ml-4" />
                <div className="mx-auto lg:text-base text-sm">
                  Lanjutkan dengan Apple
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
