import CardsContainer from "../components/CardContainer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Content from "./Content";
import Projects from "./Projects";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Content>
        <Projects />
      </Content>
      <Footer />
    </>
  );
};

export default Layout;
