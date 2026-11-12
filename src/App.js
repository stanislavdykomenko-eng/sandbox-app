import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./header";
import HomePage from "./pages/HomePage";
import ConfirmPage from "./pages/ConfirmPage";
import AbTestPage from "./pages/AbTestPage";

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/confirmPage" element={<ConfirmPage />} />
          <Route path="/ab-test" element={<AbTestPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
