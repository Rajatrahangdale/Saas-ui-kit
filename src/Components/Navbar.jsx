import { useState } from "react";
import Logo from "../assets/Navbar/Logo.png";
import MvLogo from "../assets/Navbar/MvLogo.png";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="w-full m-auto">
        <div className="bar-backgrund h- flex justify-center">
          <div className="text-center m-2 hidden md:inline">
            <p className="">
              This page is included in a free SaaS Website Kit.
            </p>
          </div>
          <div className="inline-block md:pt-2 py-2">
            <span className="">
              View the complete Kit&nbsp;
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline"
              >
                <path
                  d="M16.0306 10.5306L11.5306 15.0306C11.3897 15.1715 11.1986 15.2507 10.9994 15.2507C10.8001 15.2507 10.609 15.1715 10.4681 15.0306C10.3272 14.8897 10.2481 14.6986 10.2481 14.4994C10.2481 14.3001 10.3272 14.109 10.4681 13.9681L13.6875 10.75H4.5C4.30109 10.75 4.11032 10.671 3.96967 10.5303C3.82902 10.3897 3.75 10.1989 3.75 9.99999C3.75 9.80108 3.82902 9.61031 3.96967 9.46966C4.11032 9.329 4.30109 9.24999 4.5 9.24999H13.6875L10.4694 6.02999C10.3285 5.88909 10.2493 5.69799 10.2493 5.49874C10.2493 5.29948 10.3285 5.10838 10.4694 4.96749C10.6103 4.82659 10.8014 4.74744 11.0006 4.74744C11.1999 4.74744 11.391 4.82659 11.5319 4.96749L16.0319 9.46749C16.1018 9.53726 16.1573 9.62016 16.1951 9.71142C16.2329 9.80269 16.2523 9.90052 16.2522 9.99931C16.252 10.0981 16.2324 10.1959 16.1944 10.2871C16.1564 10.3782 16.1007 10.461 16.0306 10.5306Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="bg-black">
        {/* <nav className=" flex text-center justify-between py-4"> */}
      </div>
      {/* </div> */}

      <div className="bg-black">
        <nav className=" flex text-center justify-between py-4">
          <div>
            <img
              src={Logo}
              alt="Logo"
              className="hidden md:inline active:translate-x-1 active:translate-y-1"
            />
            <img
              src={MvLogo}
              alt="logo for mobile view"
              className="md:hidden active:translate-x-1 active:translate-y-1"
            />
          </div>
          <div onClick={handleNav} className="text-center text-white z-30">
            {!nav ? (
              <MdClose
                className="text-white text-center mt-2 mr-4 md:hidden"
                size={25}
              />
            ) : (
              <FiMenu
                className="text-white text-center mt-2 mr-4 md:hidden"
                size={25}
              />
            )}

            <div className="hidden md:inline ">
              <ul className="flex gap-3">
                <li className="mt-3 mr-4">Customers</li>
                <li className="mt-3 mr-4">Features</li>
                <li className="mt-3 mr-4">About</li>
                <li className="mt-3 mr-4">Updates</li>
                <li className="mt-3 mr-4">Help</li>
                <div className="active:translate-x-1 active:translate-y-1 duration-300 hover:ease-in-out">
                  <button className="px-4 py-2 rounded-2xl mt-2 mr-4 bg-white text-black active:ease-in-out duration-300 active:bg-[#4F21A1] active:text-white">
                    Get For Free
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </nav>
        {/* SideBar */}
        <div
          className={
            !nav
              ? "md:hidden SecFour-Background fixed left-0 w-[70%] h-full border-r border-r-gray-900 text-[#8E8E8E] font-semibold ease-out duration-500 z-20"
              : "fixed left-[-500px]"
          }
        >
          <nav>
            <ul className="flex flex-col text-center gap-3">
              <li className="mt-3 mr-4 hover:text-white">
                <a href="#">Customers</a>
              </li>
              <li className="mt-3 mr-4 hover:text-white">
                <a href="#">Features</a>
              </li>
              <li className="mt-3 mr-4 hover:text-white">
                <a href="#">About</a>
              </li>
              <li className="mt-3 mr-4 hover:text-white">
                <a href="#">Updates</a>
              </li>
              <li className="mt-3 mr-4 hover:text-white">
                <a href="#">Help</a>
              </li>
              <button className="px-4 py-2 rounded-2xl mt-2 ml-4 mr-4 bg-white text-black active:translate-x-1 active:translate-y-1 duration-300 hover:ease-in-out active:bg-[#4F21A1] active:text-white">
                Get For Free
              </button>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
