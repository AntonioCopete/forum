import { useEffect, useState } from "react";
import { fetchPostAuthor, fetchPostComments } from "../../api/axios";
import { Accordion, Card, Dropdown, DropdownButton } from "react-bootstrap";
import "./PostCard.scss";
import CommentCard from "../CommentCard/CommentCard";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { Post, Comment } from "../../interfaces";
import ConfirmationModal from "../../ConfirmationModal/ConfirmationModal";

interface Props {
  post: Post;
  handleShowModal: () => void;
  handleModalData: (post: Post) => void;
}

const PostCard = ({ post, handleShowModal, handleModalData }: Props) => {
  const [author, setAuthor] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);

  // const [showModal, setShowModal] = useState<boolean>(false);

  // const handleCloseModal = () => setShowModal(false);
  // const handleShowModal = () => setShowModal(true);

  useEffect(() => {
    const loadAuthor = async (): Promise<void> => {
      const authorData = await fetchPostAuthor(post.userId);
      setAuthor(authorData.username);
    };

    const loadComments = async (): Promise<void> => {
      const commentsData = await fetchPostComments(post.id);
      setComments(commentsData);
    };

    loadAuthor();
    loadComments();
  }, [post]);

  const handleClickModal = (): void => {
    handleModalData(post);
    handleShowModal();
  };

  return (
    <article className="card w-100">
      {/* <ConfirmationModal show={showModal} onHide={handleCloseModal} /> */}

      <Card className="w-100">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>{post.title}</Card.Title>

            <DropdownButton
              title={<IoEllipsisVerticalSharp />}
              id="dropdown"
              variant="light"
            >
              <Dropdown.Item onClick={handleClickModal}>Delete</Dropdown.Item>
            </DropdownButton>
          </div>
          <Card.Text>{post.body}</Card.Text>
          <Card.Footer>Author: {author ? author : "Author"}</Card.Footer>
        </Card.Body>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Comments</Accordion.Header>
            <Accordion.Body className="d-flex flex-column gap-4">
              {comments.map((comment: Comment) => {
                return <CommentCard comment={comment} key={comment.id} />;
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>
    </article>
  );
};

export default PostCard;
