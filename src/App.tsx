import { BrowserRouter as Router } from "react-router-dom"; // Importing BrowserRouter for routing
import Navbar from "./components/NavbarComponent"; // Importing Navbar component
import AppRoutes from "./routes/Routes"; // Importing routes configuration
import { useAppTheme } from "./hooks/useAppTheme"; // Importing custom hook for theme management
import ErrorBoundary from "./utils/ErrorBoundary"; // Importing ErrorBoundary component to handle errors
import PageError from "./components/PageErrorComponent"; // Importing PageError component to display errors

/**
 * App Component
 *
 * The main application component that sets up routing, theme management, and error handling.
 * It uses React Router for routing, a custom hook for theme management, and an error boundary
 * to catch and display errors in the application.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App(): JSX.Element {
  // Using the custom hook to get theme-related states and handlers
  const { isDark, darkClassName, handleThemeOnClick } = useAppTheme();

  return (
    <Router>
      {/* Main wrapper div with dynamic theme class and styling */}
      <div
        className={`${darkClassName} transition-all duration-300 h-screen overflow-scroll`}
      >
        {/* Navbar component with theme toggle functionality */}
        <Navbar handleThemeOnClick={handleThemeOnClick} isDark={isDark} />

        {/* Container for routing and application routes */}
        <div className="container mx-auto mt-8">
          {/* ErrorBoundary component to catch and handle errors */}
          <ErrorBoundary fallback={<PageError />}>
            <AppRoutes />
          </ErrorBoundary>
        </div>
      </div>
    </Router>
  );
}

export default App;
