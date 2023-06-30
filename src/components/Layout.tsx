import { useSession, signIn } from "next-auth/react";
import { useState, FC, ReactNode } from "react";
import Navbar from "./Navbar.Component/Navbar";
import Logo from "./Logo";
import WeightBalanceAnimation from "./WeightBalance";

type LayoutProps = {
    children: ReactNode;
  };


  const Layout: FC<LayoutProps> = ({ children }) => {
    const { data: session } = useSession();
    const [showNavbar, setShowNavbar] = useState(false);
  
    if (!session) {
      return (
        <div className="bg-bgGray w-screen h-screen flex justify-between items-center">
            <WeightBalanceAnimation/>
                <div className="text-center w-full">
                    <button
                        onClick={() => {
                            signIn("google");
                        }}
                        className="bg-white p-2 rounded-lg"
                    >
                        Login with Google
                    </button>
                    <button
                        onClick={() => {
                            signIn("google");
                        }}
                        className="bg-white p-2 rounded-lg ml-4"
                    >
                        Login with Email
                    </button>
                </div>
            </div>
      );
    }
  
    return (
      <div className="bg-bgGray min-h-screen p-5">
        <div className="flex md:hidden items-center">
          <button onClick={() => setShowNavbar(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          
        </div>
  
        <div className="bg-bgGray min-h-screen">
          <Navbar show={showNavbar} />
          <div className="flex-grow p-5">{children}</div>
        </div>
      </div>
    );
  };
  
  export default Layout;
  