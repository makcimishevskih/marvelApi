import "./App.scss";

import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import { useUpdateList } from "../../hooks/http.hook";

import AppHeader from "../appHeader/AppHeader";
import Preloader from "../preloader/Preloader";

const MainPage = lazy(() => import("../../pages/MainPage"));
const ComicsPage = lazy(() => import("../../pages/ComicsPage"));
const SingleByIdPage = lazy(() => import("../../pages/SingleByIdPage"));
const Page404 = lazy(() => import("../../pages/Page404"));

// ПРИ КЛИКЕ НА ГЕРОЯ СКРОЛЛ ТУ ИНФО
// СТРЕЛКА К НАЧАЛУ
// СДЕЛАТЬ ЛОКАЛСТОРАЖ В КОМИКСАХ

const App = () => {
  const location = useLocation();

  return (
    <div className="app">
      <AppHeader />

      <main className="main">
        <Suspense fallback={<Preloader />}>
          <TransitionGroup component={null}>
            <CSSTransition classNames="page" timeout={500}>
              <Routes location={location} key={location.key}>
                <Route index element={<MainPage />} />
                <Route path="/:id" element={<SingleByIdPage type="char" />} />

                <Route path="comics" element={<ComicsPage />} />
                <Route
                  path="/comics/:id"
                  element={<SingleByIdPage type="comics" />}
                />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
