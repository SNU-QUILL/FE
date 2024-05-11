import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page } from "@/pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Page.LoginPage />} />
        <Route path='/login' element={<Page.LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
