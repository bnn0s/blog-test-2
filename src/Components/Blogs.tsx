import GlobalApi from "../Services/GlobalApi";
import { useNavigate } from "react-router-dom";
function Blogs({ posts }: any) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mt-10 px-10 md:px-15 lg:px-32 gap-8 justify-center ">
      {posts.map((item: any) => (
        <div
          key={item.id}
          className="cursor-pointer  border-solid rounded-md border-2 border-gray-700 m-3 max-w-[600px] p-2"
          onClick={() => navigate("blog-detail/" + item.id)}
        >
          {/* <img
            src={GlobalApi.BASE_URL + item.coverImage}
            className="w-full rounded-2xl object-cover h-[200px] opacity-50 blur-sm"
          ></img> ВЕРНУТЬ???????????? */}
          <div className=" ">
            <div className="flex justify-between items-center border-b-2 border-solid border-gray-700 ">
              <h4 className="text-[23px] font-bold mb-2">{item.title}</h4>
              <h4 className="text-red-500 border-solid border-2  border-red-500 rounded-sm md:rounded-full flex item-center md:px-3 items-center self-start">
                {item.tag}
              </h4>
            </div>
            <h3 className="line-clamp-3 text-gray-400 mt-3">{item.desc}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
