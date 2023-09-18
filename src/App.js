import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Clander from "./pages/Clander";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* layout router */}
        <Route element={<Layout />}>
          <Route path="/" element={<Clander />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
