import mixer54 from "./../assets/Images/mixer54.png";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Aside from "./Aside";
function Bcard() {
  return (
    <>
      <div className="flex items-center justify-center content-center container  p-4 h-full ">
        <div className="flex flex-col md:flex-row h-full items-center md:justify-between md:gap-8 ">
          <div className="flex relative h-[192px] w-[192px] md:h-[256px] md:w-[256px]">
            <img
              src={mixer54}
              className="rounded-full shadow-xl object-cover"
            ></img>
          </div>
          <div className="flex justify-center rounded-md flex-col bg-gray-200 p-5 bg-opacity-10">
            <h1 className="flex text-3xl font-bold justify-center">
              Maxim Chernykh
            </h1>
            <p className="text-xl">ProfeSSional Unturned Enjoyer</p>
            <div className="mt-4">
              <div className="flex items-center justify-center">
                <FaTelegram className="mr-1 " size={24} />
                <a
                  className="underline"
                  target="_blank"
                  href="https:/t.me/maxim_kraevoy"
                >
                  Telegram
                </a>
              </div>
              <div className="flex items-center justify-center mt-2">
                <FaLinkedin className="mr-1" viewBox="0 0 496 512" size={24} />
                <a
                  className="underline"
                  target="_blank"
                  href="https://www.linkedin.com/in/chernykh-dev"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Aside /> */}
    </>
  );
}
export default Bcard;
