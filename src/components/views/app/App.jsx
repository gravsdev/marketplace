import { Outlet, ScrollRestoration } from "react-router-dom";

import Header from "../../melacules/header/Header";
import Footer from "../../melacules/footer/Footer";
import { useAnimationStore } from "../../../storage/animations";

import "./app.css";

function App() {
  const menuVisible = useAnimationStore((state) => state.menuVisible);

  return (
    <>
      <Header />

      <main id="root-app" className={menuVisible ? "blur" : ""}>
        <Outlet />
        <Footer />
        <div className={menuVisible ? "overlay" : ""}></div>
      </main>

      <ScrollRestoration />
    </>
  );
}

export default App;
