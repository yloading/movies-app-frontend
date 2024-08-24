import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavbarComponent/NavbarComponent";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-8">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
