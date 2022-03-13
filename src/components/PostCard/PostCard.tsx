import { useEffect, useState } from "react";
import { fetchPostAuthor, fetchPostComments } from "../../api/axios";
import { Post, Comment } from "../../interfaces";
import { Accordion, Card } from "react-bootstrap";
import "./PostCard.scss";
import CommentCard from "../CommentCard/CommentCard";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  const [author, setAuthor] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    loadAuthor();
    loadComments();
  }, []);

  const loadAuthor = async (): Promise<void> => {
    const authorData = await fetchPostAuthor(post.userId);
    setAuthor(authorData.username);
  };

  const loadComments = async (): Promise<void> => {
    const commentsData = await fetchPostComments(post.id);
    setComments(commentsData);
  };

  return (
    <article className="card w-100">
      <Card className="w-100">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
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
