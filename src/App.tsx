import { BrowserRouter, Routes, Route } from "react-router-dom";
import Platform from "./Platform";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<IndexPage />} /> */}
        <Route path="/" element={<Platform />} />
      </Routes>
    </BrowserRouter>
  );
}
