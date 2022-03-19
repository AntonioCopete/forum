import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Aside from "../Aside/Aside";
import "./Layout.scss";
import { Container } from "react-bootstrap";

const Layout = () => {
  return (
    <Container className="grid-layout">
      <Header />
      <main className="main-layout">
        <Outlet />
      </main>
      <Aside />
    </Container>
  );
};
export default Layout;
