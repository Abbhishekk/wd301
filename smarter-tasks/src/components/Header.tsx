import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="bg-gray-800 py-4">
      <div className="mx-auto px-auto md:px-4">
        <div className="flex justify-between">

          <div className="flex items-center lg:w-1/3 w-1/2 ml-3 justify-center">
            <h2 className="text-white text-lg font-bold">Smarter Tasks</h2>
          </div>
          <div className="MOBILE-MENU flex md:hidden items-center lg:w-1/3 w-1/2 ml-3  justify-end">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>
            <div
             
              className={isNavOpen ? "showMenuNav" : "hideMenuNav"}
            >
              <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} 
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              </div>
           
            <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/home" className="ml-auto md:ml-6 text-gray-300 hover:text-white">
                  Home
                </a>

              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/members" className="ml-auto md:ml-6 text-gray-300 hover:text-white">
                  Members
                </a>

              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/signout" className="ml-auto md:ml-6 text-gray-300 hover:text-white ">
                  Log Out
                </a>

              </li>
            </ul>
            </div>
          </div>
          <div className="flex  gap-0 md:gap-2 lg:w-1/3 w-1/2" >
            <ul className="DESKTOP-MENU hidden space-x-auto md:space-x-8 md:flex">
              <li>
              <a href="/home" className="ml-auto md:ml-6 text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
              <a href="/members" className="ml-auto md:ml-6 text-gray-300 hover:text-white">
                  Members
                </a>
              </li>
              <li>
              <a href="/signout" className="ml-auto md:ml-6 text-gray-300 hover:text-white ">
                  Log Out
                </a>
              </li>
            </ul>
          </div>


        </div>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </nav>
  );
};

export default Header;