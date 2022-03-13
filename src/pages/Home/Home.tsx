import { useEffect, useState } from "react";

import { fetchPosts } from "../../api/axios";

import Post from "../../interfaces/Post";

import PostCard from "../../components/PostCard/PostCard";
import Aside from "../../components/Aside/Aside";

import "./Home.scss";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadPosts(page);
    console.log(page);
    // window.scrollTo(0, 0);
  }, [page]);

  const loadPosts = async (page: number) => {
    const fetchedPosts = await fetchPosts(page);
    console.log(fetchedPosts);

    setPosts(fetchedPosts);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < 10) setPage(page + 1);
  };

  return (
    <>
      <section>
        {posts.length > 0 ? (
          posts.map((post: Post) => {
            return <PostCard post={post} key={post.id} />;
          })
        ) : (
          <p>Loading posts...</p>
        )}

        <nav className="d-flex justify-content-center align-items-center">
          <button
            className="page-panel__button"
            onClick={handlePrevPage}
            disabled={page <= 1}
          >
            <IoIosArrowBack size={30} />
          </button>

          <p className="page-panel__text m-0">{page}</p>
          <button
            className="page-panel__button"
            onClick={handleNextPage}
            disabled={page >= 10}
          >
            <IoIosArrowForward size={30} />
          </button>
        </nav>
      </section>

      <Aside />
    </>
  );
};
export default Home;
