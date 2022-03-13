import { useEffect, useState } from "react";
import { fetchPostAuthor, fetchPostComments } from "../../api/axios";
import Post from "../../interfaces/Post";
import { Accordion, Card } from "react-bootstrap";
import "./PostCard.scss";
import Comment from "../../interfaces/Comment";
import CommentCard from "../CommentCard/CommentCard";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  const [author, setAuthor] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    loadAuthor();
    loadComments();
  }, []);

  const loadAuthor = async () => {
    const authorData = await fetchPostAuthor(post.userId);
    setAuthor(authorData.username);
  };

  const loadComments = async () => {
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
            <Accordion.Body>
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
