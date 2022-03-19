import { Navbar } from "react-bootstrap";
import "./Header.scss";
import { FaForumbee } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <header className="header-layout">
      <Navbar variant="light" className="d-flex justify-content-between">
        <Navbar.Brand href="/">
          <FaForumbee size={40} />
        </Navbar.Brand>
        <FiUser size={40} />
      </Navbar>
    </header>
  );
};

export default Header;
