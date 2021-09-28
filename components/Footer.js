import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
const Footer = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <div className={`flex justify-center w-full pt-3 font-light border-t-2 shadow-sm text-md h-14 ${theme&&"darkLayout"}`}>
      <span>&#169;</span>
      <h5>mohamad zaraei (radshodam)</h5>
    </div>
  );
};

export default Footer;
