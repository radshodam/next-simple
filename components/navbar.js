import Image from "next/image";
import { useContext, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { FaSun, FaMoon } from "react-icons/fa";
//*redux
import { useSelector } from "react-redux";
//*redux
import ModalDataes from "./modaldataes";
//?context
import { ThemeContext } from "./ThemeContext";
//?context

const Navbar = () => {
  //backdrop
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow(!show);
  };
  //backdrop
  //*userSelector for call redux state
  const numberProducts = useSelector((state) => state.Counter);
  //*userSelector for call redux state
  // //?ThemeContext
  const [theme, setTheme] = useContext(ThemeContext);
  const themeHandler = () => {
    setTheme(!theme);
  };
  // //?ThemeContext
  return (
    <>
      {/* backDrop */}
      {show ? (
        <div>
          <div
            className="fixed top-0 right-0 z-10 w-full h-screen bg-black bg-opacity-40 "
            onClick={handleModal}
          ></div>
          <div className="fixed z-20 w-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 rounded-md shadow-xl top-1/2 left-1/2 h-96 scrollbar scrollbar-thumb-red-300 scrollbar-thin">
            <button
              className="absolute text-4xl font-black text-right right-5"
              onClick={handleModal}
            >
              <IoCloseOutline />
            </button>
            <div className="h-96">
              <ModalDataes />
            </div>
          </div>
        </div>
      ) : null}
      {/* backDrop */}
      <div
        className={`flex flex-row-reverse justify-between w-full px-10 bg-white shadow-xl ${
          theme && "darkLayout"
        }`}
      >
        <div className="flex flex-row-reverse justify-start ">
          <Image src={"/images/shop.png"} alt="shop" width={150} height={75} />
          <h1 className="px-2 my-auto font-bold text-gray-700">products</h1>
          <h1 className="px-2 my-auto font-bold text-gray-700">store cart</h1>
        </div>
        <div className="relative flex flex-row-reverse justify-center px-2 my-auto">
          {/* theme */}
          <button
            className={`ml-10 text-2xl ${theme && "iconStyle"}`}
            onClick={themeHandler}
          >
            {theme ? <FaSun /> : <FaMoon />}
          </button>
          {/* theme */}
          <div className="text-4xl text-gray-600 ">
            <button onClick={handleModal}>
              <HiOutlineShoppingBag />
            </button>
          </div>
          <span className="absolute w-6 h-6 text-center text-white bg-red-400 top-4 left-8 rounded-2xl">
            {numberProducts}
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
