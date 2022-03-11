import Post from "../../interfaces/Post";

interface Props {
  post: Post;
}

const Card = ({ post }: Props) => {
  return (
    <article className="card">
      <title>{post.title}</title>
      <p>{post.body}</p>
      <p>{post.id}</p>
    </article>
  );
};

export default Card;
