import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "../Services/GlobalApi";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type Resp = {
  title: string;
  coverImage: string;
  desc: string;
  tag: string;
};

function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<Resp>();
  useEffect(() => {
    console.log("Id", id);
    getBlogById();
  }, []);

  const getBlogById = () => {
    GlobalApi.getPostById(id).then((resp) => {
      const item = resp.data.data;
      const result = {
        id: item.id,
        tag: item.attributes.tag,
        title: item.attributes.title,
        desc: item.attributes.description,
        coverImage: item.attributes.picture.data.attributes.url,
      };
      setPost(result);
      console.log("result", result);
    });
  };
  return (
    <div className="px-6 md:px-20 lg:px-56 mt-10">
      <h3 className="text-red-500 text-[12px]">{post?.tag}</h3>
      <h3 className="text-[23px] font-bold">{post?.title}</h3>
      <img
        className="rounded-2xl mt-5 mb-5 w-full"
        src={GlobalApi.BASE_URL + post?.coverImage}
      />
      {/* <h3>{post?.desc}</h3> */}
      {post && <ReactMarkdown children={post?.desc} className="leading-9" />}
    </div>
  );
}

export default BlogDetail;
