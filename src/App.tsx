import { FC } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./routes/routes.ts";
import Header from "./components/header/Header.tsx";
import ErrorPage from "./pages/errorPage/ErrorPage.tsx";

const App: FC = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Header />
    </Router>
  );
};

export default App;
