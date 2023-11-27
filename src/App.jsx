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
import Splash from "./Views/Splash";
import Profile from "./Views/Profile";
import Task from "./Views/Task";
import StudentReport from "./Views/StudentReport";
import Absence from "./Views/Absence";
import StudentActivity from "./Views/StudentActivity";
import Chat from "./Views/Chat";
import SubjectReport from "./Views/SubjectReport";

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
            <Route path="/dashboard" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/task" element={<Task />} />
            <Route path="/report" element={<StudentReport />} />
            <Route path="/subject/report" element={<SubjectReport />} />
            <Route path="/absence" element={<Absence />} />
            <Route path="/activity" element={<StudentActivity />} />
            <Route path="/chat" element={<Chat />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Splash />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
