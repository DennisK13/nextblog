import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="relative flex justify-between items-center w-full ">
      <div className="flex justify-center items-center">
        <a className="text-4xl ">DK</a>
      </div>
      <div>
        <ol className="p-0 m-0 list-none flex items-center">
          <li className="p-3">
            <a className="text-2xl ">About</a>
          </li>
          <li className="p-3">
            <a className="text-2xl ">Blog</a>
          </li>
          <li className="p-3">
            <a className="text-2xl ">Contact Us</a>
          </li>
        </ol>
      </div>
    </nav>
  );
};

const Header = (props: Props) => {
  return (
    <header className="fixed top-0 z-10 px-12 flex justify-between items-center w-full h-[100px]">
      <Navbar />
    </header>
  );
};

export default Header;

{
  /* // <nav className="relative mx-auto p-6">
    //   <div className="flex items-center justify-between">
    //     <div className="pt-2">
    //       <a href="/" className="text-2xl font-bold text-white ">
    //         DK
    //       </a>
    //     </div>
    //     <div className="pt-2">
    //       <ul className="flex space-x-6 ">
    //         <li className="items-center">
    //           <a href="/" className="text-1xl font-bold text-white ">
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/" className="text-1xl font-bold text-white">
    //             Experience
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/" className="text-1xl font-bold text-white">
    //             Work
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/" className="text-1xl font-bold text-white">
    //             Contact
    //           </a>
    //         </li>

    //       </ul>
    //     </div>
    //   </div>
    // </nav> */
}
