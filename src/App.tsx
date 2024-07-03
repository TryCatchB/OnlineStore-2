import { FC } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { routes } from "./routes/routes.ts";
import Header from "./components/header/Header.tsx";
import ErrorPage from "./pages/errorPage/ErrorPage.tsx";
import useErrorPage from "./hooks/useErrorPage.ts";

const App: FC = () => {
  const isErrorPage = useErrorPage();

  return (
    <Provider store={store}>
      <Router>
        {!isErrorPage && <Header />}
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
          <Route path="/*" element={<Navigate to="/error" />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
