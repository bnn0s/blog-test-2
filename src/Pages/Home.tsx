import React, { useEffect, useState } from "react";
import Search from "../Components/Search";
import IntroPost from "../Components/IntroPost";
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Footer from "../Components/Footer";
import GlobalApi from "../Services/GlobalApi";

// interface Zxc {
//   item: string;
//   id: string;
//   title: string;
//   description: string;
//   picture: string;
//   attributes: string;
// }

function Home() {
  const [post, setPost] = useState([]);
  const [orgpost, setOrgPost] = useState([]);
  useEffect(() => {
    getPost();
  }, []);
  const getPost = () => {
    GlobalApi.getPost.then((resp) => {
      console.log("-----------------------", resp.data.data);
      const result = resp.data.data.map((item: any) => ({
        id: item.id,
        tag: item.attributes.tag,
        title: item.attributes.title,
        desc: item.attributes.description,
        coverImage: item.attributes.picture.data.attributes.url,
      }));
      setPost(result);
      setOrgPost(result);
    });
  };

  const filterPost = (tag: any) => {
    if (tag == "Все") {
      setPost(orgpost);
      return;
    }
    const result = orgpost.filter((item: any) => item.tag == tag);
    setPost(result);
  };
  return (
    <div>
      <Search selectedTag={(tag) => filterPost(tag)} />
      {post.length > 0 ? <IntroPost post={post[0]} /> : null}
      {post.length > 0 ? <Blogs posts={post} /> : null}
      <Footer />
    </div>
  );
}

export default Home;
