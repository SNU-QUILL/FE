import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "@/app/routes/ProtectedRoute";
import CommonLayout from "@/widgets/layout/ui/CommonLayout";
import { Page } from "@/pages";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Navigate to='/main' />} />
        <Route path='/login' element={<Page.LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<CommonLayout />}>
            <Route path='/main' element={<Page.MainPage />} />
            <Route path='/article'>
              <Route path=':category' element={<Navigate to='1' />} />
              <Route path=':category/:page' element={<Page.ArticlePage />} />
            </Route>
            <Route path='/misc' element={<Page.MiscPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
