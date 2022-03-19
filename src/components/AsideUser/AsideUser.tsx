import { Author } from "../../interfaces";

interface Props {
  author: Author;
}

const AsideUser = ({ author }: Props) => {
  return (
    <section className="border rounded border-secondary p-0 d-flex gap-1">
      <img
        src={`https://ui-avatars.com/api/?name=${author.username}&size=25&rounded=true&bold=true&format=svg&background=f7f1e3`}
        alt={author.username}
      />
      <p className="m-0">{author.username}</p>
    </section>
  );
};

export default AsideUser;
