import logo from "../image/builderscrack-logo.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex top-0 right-0 left-0 fixed bg-gray-100 space-x-4 p-4">
      <div className="items-center">
        <img src={logo} className="p-1" />
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <button className="mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Docs
          </button>
          <button className="mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Examples
          </button>
          <button className="mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Blog
          </button>
        </div>
        <div>
          <Link
            className="text-sm px-4 py-2 leading-none border rounded text-black hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            to="/signup"
          >
            Sign up
          </Link>
          <Link
            className="text-sm px-4 py-2 leading-none border rounded text-black hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            to="/login"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
    // <div>
    //   <div className="sticky top-0 right-0 left-0 fixed bg-gray-100 space-x-4">
    //     <div className="float-left">
    //       <ul>
    //         <li className="float-left">
    //           <img src={logo} className="p-1" />
    //         </li>
    //         <li className="float-left">
    //           <button>Button 1</button>
    //         </li>
    //         <li className="float-left">
    //           <button>Button 2</button>
    //         </li>
    //       </ul>
    //     </div>
    //     <div>
    //       <ul>
    //         <li className="float-right">
    //           <button>Sign up</button>
    //         </li>
    //         <li className="float-right">
    //           <button>Log in</button>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};
