import { BrowserRouter, Routes, Route } from "react-router-dom";
import Platform from "./Platform";
import AuthCallback from "./AuthCallback";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./TermsOfService/TermsOfService";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Platform />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}
