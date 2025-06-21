import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/nav";
import Portfollio from "./components/Portfollio/Portfollio";
import Work from "./components/Work/Work";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <>
      <Home/>
      <About/>
      <Portfollio/>
      <Work/>
      <Contact/>
      <Footer/>
     {/* <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300 transition-colors"
        >
          Toggle {isDark ? "Light" : "Dark"} Mode
        </button> */}
    </>
  );
}

export default App;
