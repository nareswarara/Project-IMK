import {
  HashRouter as Router,
  Route,
  Routes,
  NavLink,
  useLocation,
} from "react-router-dom";
import Layout from "./Views/Layout";
import Login from "./Views/Login";
import Footer from "./Views/Footer";
import { useEffect } from "react";
import Home from "./Views/Home";

const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
