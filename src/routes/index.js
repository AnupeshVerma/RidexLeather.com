import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import MainRoutes from "./MainRoutes";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainRoutes />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        {/* Catch all non-existent routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
