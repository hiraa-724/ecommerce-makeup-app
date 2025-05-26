import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Careers from "../pages/Careers";
import ProductDetail from "../pages/ProductDetail";
import BacktoTop from "../components/BacktoTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/category/:name" element={<Category />} /> */}
        <Route path="/search" element={<Search />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />}></Route>
      </Routes>
      <BacktoTop />
    </BrowserRouter>
  );
}

export default AppRoutes;
