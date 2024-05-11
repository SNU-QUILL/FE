import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page } from "@/pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Page.AuthPage />}>
          <Route path='/login' element={<Page.LoginPage />} />
          <Route path='/test' element={<div>test</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
