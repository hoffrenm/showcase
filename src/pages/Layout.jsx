import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Content from "./Content";
import Projects from "./Projects";
import ProjectPage from "../components/ProjectPage";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen w-screen justify-evenly">
      <Navbar />
      <Content>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/:id" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Content>
      <Footer />
    </div>
  );
};

export default Layout;
