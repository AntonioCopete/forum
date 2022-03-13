import { Card } from "react-bootstrap";
import Comment from "../../interfaces/Comment";

interface Props {
  comment: Comment;
}

const CommentCard = ({ comment }: Props) => {
  return (
    <Card key={comment.id}>
      <Card.Title>{comment.name}</Card.Title>
      <Card.Text>{comment.body}</Card.Text>
      <Card.Footer>User: {comment.email} </Card.Footer>
    </Card>
  );
};

export default CommentCard;
