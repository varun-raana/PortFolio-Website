import { Routes, Route } from "react-router-dom";

import Home from "./navigations/Home";
import About from "./navigations/About";
import Projects from "./navigations/Projects";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Container from "./navigations/Container";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/my-projects" element={<Projects />}>
            {/* <Route path="/:id" element={<Project/>} */}
          </Route>
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
