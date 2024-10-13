import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Navbar from "../components/layout/Navbar";
import NotFound from "../pages/NotFound";
import AuthRoutes from "./AuthRoutes";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <section className="container">
          {/* <Alert /> */}
          <Routes>
            <Route path="/" element={<MainRoutes />} />
            <Route path="/auth/*" element={<AuthRoutes />} />

            {/* Catch all non-existent routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
