import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import { Toaster } from "@/components/ui/sonner";
import Landing from "@/pages/Landing";
import LawyerLogin from "@/pages/LawyerLogin";
import LawyerDashboard from "@/pages/LawyerDashboard";
import ClientLogin from "@/pages/ClientLogin";
import ClientPortal from "@/pages/ClientPortal";
import AuthCallback from "@/pages/AuthCallback";
import Properties from "@/pages/Properties";
import Articles from "@/pages/Articles";

function Router() {
  const location = useLocation();
  // Emergent Google OAuth returns with session_id in the URL fragment.
  // Synchronous check (during render) prevents race conditions.
  if (location.hash?.includes("session_id=")) return <AuthCallback />;

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/lawyer/login" element={<LawyerLogin />} />
      <Route path="/lawyer/dashboard" element={<LawyerDashboard />} />
      <Route path="/client/login" element={<ClientLogin />} />
      <Route path="/client/portal" element={<ClientPortal />} />
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <BrowserRouter>
          <Router />
          <Toaster richColors position="top-center" />
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;
