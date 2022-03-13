import { useEffect, useState } from "react";
import { fetchPostAuthor } from "../../api/axios";
import Post from "../../interfaces/Post";
import { Card } from "react-bootstrap";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  const [author, setAuthor] = useState();

  useEffect(() => {
    loadAuthor();
  }, []);

  const loadAuthor = async () => {
    const author = await fetchPostAuthor(post.userId);
    console.log(author);
    setAuthor(author.username);
  };

  return (
    <article className="card">
      <Card>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Card.Footer>Author: {author ? author : "Author"}</Card.Footer>
        </Card.Body>
      </Card>
    </article>
  );
};

export default PostCard;
