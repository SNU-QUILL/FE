import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Page } from "@/pages";
import { ProtectedRoute } from "@/components/routes/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Navigate to='/test' />} />
        <Route path='/login' element={<Page.LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path='/test' element={<div>test</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
