import GlobalApi from "../Services/GlobalApi";
import { useNavigate } from "react-router-dom";

function IntroPost({ post }: any) {
  <img src={GlobalApi.BASE_URL + post.coverImage} />;

  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col md:flex-row cursor-pointer
     md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8 justify-center items-center ]"
      onClick={() => navigate("blog-detail/" + post.id)}
    >
      {/* <img
        src={GlobalApi.BASE_URL + post.coverImage}
        className="
        rounded-2xl object-cover w-full h-full"
      /> НЕ ЗАБЫТЬ ВЕРНУТЬ ИМГ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}

      <div className="border-solid rounded-md border-2 border-gray-700 m-3 max-w-[600px] p-2 ">
        <div className="flex justify-between items-center border-b-2 border-solid border-gray-700 ">
          <h2 className="text-[23px] font-bold mb-2">{post.title}</h2>
          <div className="flex gap-10 justify-start mb-5">
            <h4 className="text-red-500 border-solid border-2  border-red-500 rounded-sm md:rounded-full flex item-center md:px-3 items-center">
              {post.tag}
            </h4>
          </div>
        </div>
        <h4 className="line-clamp-6 text-gray-400 mt-5">{post.desc}</h4>
        <div className="flex items-center mt-5">
          <div className="">
            <h3 className="font-bold ">Maxim Chernykh</h3>
            <h3 className="text-gray-500">25 Jan 2024</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroPost;
