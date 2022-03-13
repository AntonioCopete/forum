import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Props {
  page: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
}

const PageControl = ({ page, handleNextPage, handlePrevPage }: Props) => {
  return (
    <nav className="d-flex justify-content-center align-items-center">
      <button
        className="page-panel__button"
        onClick={() => handlePrevPage()}
        disabled={page <= 1}
      >
        <IoIosArrowBack size={30} />
      </button>

      <p className="page-panel__text m-0">{page}</p>
      <button
        className="page-panel__button"
        onClick={() => handleNextPage()}
        disabled={page >= 10}
      >
        <IoIosArrowForward size={30} />
      </button>
    </nav>
  );
};

export default PageControl;
