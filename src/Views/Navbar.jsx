const Navbar = () => {
  return (
    <>
      <div className="navbar bg-cust-primary400 lg:text-white px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Student Report</a>
              </li>
              <li>
                <a>Schedule</a>
              </li>
              <li>
                <a>Tasks</a>
              </li>
              <li>
                <a>Activity</a>
              </li>
              <li>
                <a>Absence</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white ">SIMAUB</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li className="hover:bg-white rounded-full duration-300">
              <a className="hover:text-cust-primary400 duration-300">
                Dashboard
              </a>
            </li>
            <li className="hover:bg-white rounded-full duration-300">
              <a className="hover:text-cust-primary400 duration-300">
                Student Report
              </a>
            </li>
            <li className="hover:bg-white rounded-full duration-300">
              <a className="hover:text-cust-primary400 duration-300">
                Schedule
              </a>
            </li>
            <li className="hover:bg-white rounded-full duration-300">
              <a className="hover:text-cust-primary400 duration-300">Tasks</a>
            </li>
            <li className="hover:bg-white rounded-full duration-300">
              <a className="hover:text-cust-primary400 duration-300">
                Activity
              </a>
            </li>
            <li className="hover:bg-white rounded-full duration-300">
              <a className="hover:text-cust-primary400 duration-300">Absence</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
