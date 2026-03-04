import { BrowserRouter, Routes, Route } from "react-router-dom";
import Platform from "./Platform";
import AuthCallback from "./AuthCallback";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Platform />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
      </Routes>
    </BrowserRouter>
  );
}
