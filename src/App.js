import AppHeader from "./components/shared/AppHeader";
import { BrowserRouter as Router } from "react-router-dom";
import './css/main.css';

function App() {
  return (
    <Router>
      <AppHeader />
    </Router>
  );
}

export default App;
