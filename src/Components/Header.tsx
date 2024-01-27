import logo from "./../assets/Images/logo.png";
import { IoLogoYoutube } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center">
      <img src={logo} className="w-[380px]"></img>
      <ul className="flex gap-4 md:gap-14">
        <li
          className="hover:font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li className="hover:font-bold cursor-pointer">About</li>
        <li className="hover:font-bold cursor-pointer">Contact</li>
      </ul>
      <button className="bg-red-500 rounded-full flex items-center">
        Subscribe <IoLogoYoutube className="ml-3" />
      </button>
    </div>
  );
}

export default Header;
