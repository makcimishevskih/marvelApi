import { useState } from "react";
import ComicsList from "../comicsList/ComicsList";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import AppBanner from "../appBanner/AppBanner";
import { Helmet } from "react-helmet";

const ComicsPage = () => {
    const [comicsList, setComicsList] = useState([]);

    const updateComicsList = (comicsList) => {
        setComicsList((comics) => [...comics, ...comicsList]);
    };

    return (
        <>
            <Helmet>
                <meta charSet='utf-8' name='descrition' />
                <title>Comicses Page</title>
            </Helmet>
            <ErrorBoundary>
                <AppBanner />
            </ErrorBoundary>

            <ErrorBoundary>
                <ComicsList
                    comicsList={comicsList}
                    updateComicsList={updateComicsList}
                />
            </ErrorBoundary>
        </>
    );
};

export default ComicsPage;
