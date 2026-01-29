import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service";
import Prricing from "./components/Pricing";
import About from "./components/About";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/pricing" element={<Prricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
