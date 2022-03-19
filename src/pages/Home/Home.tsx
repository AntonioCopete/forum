import { useEffect, useState } from "react";
import { fetchPosts } from "../../api/axios";
import { Post } from "../../interfaces";
import PostCard from "../../components/PostCard/PostCard";
import "./Home.scss";
import { Container, Row } from "react-bootstrap";
import PageControl from "../../components/PageControl/PageControl";
import { useDispatch, useSelector } from "react-redux";
import { savePosts } from "../../redux/posts/actions";
import { RootState } from "../../redux/posts/selector";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts);

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const loadPosts = async (page: number): Promise<void> => {
      const postsData = await fetchPosts(page);
      console.log(postsData[0].id);

      dispatch(savePosts(postsData));
    };

    loadPosts(page);
    // window.scrollTo(0, 0);
  }, [page]);

  const handlePrevPage = (): void => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = (): void => {
    if (page < 10) setPage(page + 1);
  };

  return (
    <>
      <section>
        <Container>
          <Row className="gy-4">
            {posts ? (
              posts.map((post: Post) => {
                return <PostCard key={post.id} post={post} />;
              })
            ) : (
              <p>Loading posts...</p>
            )}
          </Row>
        </Container>
      </section>

      <PageControl
        page={page}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </>
  );
};
export default Home;
