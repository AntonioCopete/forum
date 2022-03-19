import { useEffect, useState } from "react";
import { fetchPosts } from "../../api/axios";
import { Post } from "../../interfaces";
import PostCard from "../../components/PostCard/PostCard";
import Aside from "../../components/Aside/Aside";
import "./Home.scss";
import { Col, Container, Row } from "react-bootstrap";
import PageControl from "../../components/PageControl/PageControl";
import ConfirmationModal from "../../ConfirmationModal/ConfirmationModal";
import { useDispatch, useSelector } from "react-redux";
import { savePosts } from "../../redux/posts/actions";
import { RootState } from "../../redux/posts/selector";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts);
  // console.log(useSelector((state) => state.posts));

  // const [posts, setPosts] = useState<Post[]>();
  const [page, setPage] = useState<number>(1);

  const [showModal, setShowModal] = useState<boolean>(false);

  const [modalData, setmodalData] = useState<Post>({
    body: "",
    id: 0,
    title: "",
    userId: 0,
  });

  useEffect(() => {
    const loadPosts = async (page: number): Promise<void> => {
      const postsData = await fetchPosts(page);
      console.log(postsData[0].id);

      dispatch(savePosts(postsData));
    };

    loadPosts(page);
    // window.scrollTo(0, 0);
  }, [page]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => setShowModal(true);

  const handleModalData = (post: Post) => {
    setmodalData(post);
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
        {/* <ConfirmationModal
          show={showModal}
          onHide={handleCloseModal}
          post={modalData}
        /> */}
        <Container>
          <Row className="gy-4">
            {posts ? (
              posts.map((post: Post) => {
                return (
                  <Col xs={12} key={post.id}>
                    <PostCard
                      post={post}
                      handleShowModal={handleShowModal}
                      handleModalData={handleModalData}
                    />
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
