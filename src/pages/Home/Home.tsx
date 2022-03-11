import axios from "axios";
import { useEffect, useState } from "react";
import Aside from "../../components/Aside/Aside";
import { fetchPosts } from "../../api/axios";
import Post from "../../interfaces/Post";
import Card from "../../components/Card/Card";
import "./Home.scss";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadPosts(page);
    console.log(page);
  }, [page]);

  const loadPosts = async (page: number) => {
    const fetchedPosts = await fetchPosts(page);
    console.log(fetchedPosts);

    setPosts(fetchedPosts);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <section className="container">
        {posts.length > 0 ? (
          posts.map((post: Post) => {
            return <Card post={post} key={post.id} />;
          })
        ) : (
          <p>Loading posts...</p>
        )}

        {page > 1 && (
          <div onClick={handlePrevPage}>
            <IoIosArrowBack />
          </div>
        )}
        {page < 10 && (
          <div onClick={handleNextPage}>
            <IoIosArrowForward />
          </div>
        )}
      </section>
      <Aside />
    </>
  );
};
export default Home;
