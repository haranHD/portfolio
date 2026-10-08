import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";
import { ThemeProvider } from "./hooks/useTheme.jsx";

export default function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <div className="bg-bg text-ink min-h-screen font-body transition-colors duration-200 w-full overflow-x-hidden">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<CaseStudy />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
