import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavbarComponent/NavbarComponent";
import AppRoutes from "./routes/Routes";
import { useAppTheme } from "./hooks/useAppTheme";

function App() {
  const { isDark, darkClassName, handleThemeOnClick } = useAppTheme();

  return (
    <Router>
      <div className={`${darkClassName} transition-all duration-300`}>
        <Navbar handleThemeOnClick={handleThemeOnClick} isDark={isDark} />
        <div className="container mx-auto mt-8">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
