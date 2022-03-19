import { useEffect, useState } from "react";
import { fetchPostAuthor, fetchPostComments } from "../../api/axios";
import { Accordion, Card, Dropdown, DropdownButton } from "react-bootstrap";
import "./PostCard.scss";
import CommentCard from "../CommentCard/CommentCard";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { Post, Comment } from "../../interfaces";
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/posts/actions";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);

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

  const handleDeletePost = (): void => {
    dispatch(deletePost(post.id));
  };

  return (
    <article className="card w-100 p-0">
      <Card className="post-card">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>{post.title}</Card.Title>

            <DropdownButton
              title={<IoEllipsisVerticalSharp />}
              id="dropdown"
              className="post-card__dropdown"
              variant="light"
            >
              <Dropdown.Item onClick={handleDeletePost}>Delete</Dropdown.Item>
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
