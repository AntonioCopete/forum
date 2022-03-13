import { useEffect, useState } from "react";
import { fetchPosts } from "../../api/axios";
import { Post } from "../../interfaces";
import PostCard from "../../components/PostCard/PostCard";
import Aside from "../../components/Aside/Aside";
import "./Home.scss";
import { Col, Container, Row } from "react-bootstrap";
import PageControl from "../../components/PageControl/PageControl";

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    loadPosts(page);
    // window.scrollTo(0, 0);
  }, [page]);

  const loadPosts = async (page: number): Promise<void> => {
    const postsData = await fetchPosts(page);
    setPosts(postsData);
  };

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
            {posts.length > 0 ? (
              posts.map((post: Post) => {
                return (
                  <Col xs={12} key={post.id}>
                    <PostCard post={post} />
                  </Col>
                );
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
      <Aside />
    </>
  );
};
export default Home;
