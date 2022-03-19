import { useEffect, useState } from "react";
import { fetchAuthors } from "../../api/axios";
import { Author } from "../../interfaces";
import AsideUser from "../AsideUser/AsideUser";

const Aside = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  useEffect(() => {
    loadAuthors();
  }, []);

  const loadAuthors = async () => {
    const authorsData = await fetchAuthors();
    setAuthors(authorsData);
  };

  return (
    <aside>
      <h4 className="text-center">Popular users</h4>
      <div className="row gy-2 m-0">
        {authors.length > 0 &&
          authors.map((author) => {
            return <AsideUser key={author.id} author={author} />;
          })}
      </div>
    </aside>
  );
};

export default Aside;
