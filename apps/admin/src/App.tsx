import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "@/components/routes/ProtectedRoute";
import CommonLayout from "@/components/layout/CommonLayout";
import { Page } from "@/pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Navigate to='/main' />} />
        <Route path='/login' element={<Page.LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<CommonLayout />}>
            <Route path='/main' element={<Page.MainPage />} />
            <Route path='/user' element={<Page.UserPage />} />
            <Route path='/logout' element={<Page.LogoutPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
