import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BirdsBackground from "./components/BirdsBackground";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import EntryLoader from "./components/Loader/EntryLoader";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <EntryLoader />}
      </AnimatePresence>

      {!loading && (
        <div className="!relative !animate-fadeIn">
          <BirdsBackground />
          <Navbar />
          <Home />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;