
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <Home />

      <Footer />
    </>
  );
}
