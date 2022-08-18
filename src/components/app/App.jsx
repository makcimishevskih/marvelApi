import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import { useUpdateList } from "../../hooks/http.hook";
import { Suspense, lazy } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AppHeader from "../appHeader/AppHeader";
import Preloader from "../preloader/Preloader";

const MainPage = lazy(() => import("../pages/MainPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage"));
const Page404 = lazy(() => import("../pages/Page404"));
const SinglePage = lazy(() => import("../pages/SinglePage"));


// ГЛЯНУТЬ АКТИВНЫЙ CHARACTER ПРИ АКТИВНОМ СИНГЛЧАР ПОСЛЕ ФОРМЫ

const App = () => {
    const { charList, search, setCharList, updateCharList, clearCharList } =
        useUpdateList();

    const location = useLocation();
    return (
        <div className='app'>
            <AppHeader
                updateCharList={updateCharList}
                clearCharList={clearCharList}
            />

            <main>
                <Suspense fallback={<Preloader />}>
                    <TransitionGroup component={null}>
                        <CSSTransition classNames='page' timeout={500}>
                            <Routes location={location} key={location.key}>
                                <Route index element={<MainPage />} />
                                <Route
                                    path='/:id'
                                    element={<SinglePage type='char' />}
                                />

                                <Route
                                    path='comics'
                                    element={<ComicsPage />}></Route>
                                <Route
                                    path='/comics/:id'
                                    element={<SinglePage type='comics' />}
                                />
                                <Route path='*' element={<Page404 />} />
                            </Routes>
                        </CSSTransition>
                    </TransitionGroup>
                </Suspense>
            </main>
        </div>
    );
};

export default App;
