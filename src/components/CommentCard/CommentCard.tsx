import { Card } from "react-bootstrap";
import { Comment } from "../../interfaces";

interface Props {
  comment: Comment;
}

const CommentCard = ({ comment }: Props) => {
  return (
    <Card key={comment.id} className="p-3">
      <Card.Title>{comment.name}</Card.Title>
      <Card.Text>{comment.body}</Card.Text>
      <Card.Footer>User: {comment.email} </Card.Footer>
    </Card>
  );
};

export default CommentCard;
