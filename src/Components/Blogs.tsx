import GlobalApi from "../Services/GlobalApi";
import { useNavigate } from "react-router-dom";
function Blogs({ posts }: any) {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32 gap-8">
      {posts.map((item: any) => (
        <div
          key={item.id}
          className="m-4 cursor-pointer "
          onClick={() => navigate("blog-detail/" + item.id)}
        >
          <img
            src={GlobalApi.BASE_URL + item.coverImage}
            className="w-full rounded-2xl object-cover h-[200px]"
          ></img>
          <h3 className="text-red-500 mt-3">{item.tag}</h3>
          <h3 className="font-bold mt-5">{item.title}</h3>
          <h3 className="line-clamp-3 text-gray-400 mt-3">{item.desc}</h3>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
