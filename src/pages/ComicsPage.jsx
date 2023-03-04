import { useState } from "react";
import { Helmet } from "react-helmet";

import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";
import ComicsList from "../components/comicsList/ComicsList";
import AppBanner from "../components/appBanner/AppBanner";

const ComicsPage = () => {
  const [comicsList, setComicsList] = useState([]);

  const updateComicsList = (comicsList) => {
    setComicsList((comics) => [...comics, ...comicsList]);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" name="descrition" />
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
