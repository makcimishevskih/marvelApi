import "./singleById.scss";

import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import useMarvelService from "../../services/MarvelService";

import Preloader from "../preloader/Preloader";
import Error from "../error/Error";

const SingleById = ({ type }) => {
  const [data, setData] = useState(null);

  const { id } = useParams();
  const { loader, error, getComicsByIdData, getCharacterByIdData, clearError } =
    useMarvelService();

  useEffect(() => {
    clearError();
    switch (type) {
      case "comics":
        getComicsByIdData(id).then((comic) => onDataLoaded(comic));
        break;
      case "char":
        getCharacterByIdData(id).then((char) => onDataLoaded(char));
        break;
      default:
        break;
    }
  }, [id]);

  const onDataLoaded = (data) => {
    setData(() => data);
  };

  const err = error && <Error />;
  const preloader = loader && <Preloader />;
  const helmetSEO = data ? (
    <Helmet>
      <meta charSet="utf-8" name="descrition" />
      <title>{data.title} Info</title>
    </Helmet>
  ) : (
    <Helmet>
      <meta charSet="utf-8" name="descrition" />
      <title>Single {type} Info</title>
    </Helmet>
  );

  const isHasInfoElems = !loader && !error && data && type === "comics" && (
    <>
      <p className="single-info__descr">{data.pages}</p>
      <p className="single-info__descr">Language: en-us</p>
      <div className="single-info__price">{data.price}</div>
    </>
  );

  return (
    <>
      {helmetSEO}
      {err}
      {preloader}
      {!loader && !error && data && (
        <div className="single">
          <img src={data.thumbnail} alt={data.title} className="single__img" />

          <div className="single-info">
            <div className="single-info__block">
              <h2 className="single-info__name">{data.title}</h2>
              <p className="single-info__descr">{data.description}</p>
              {isHasInfoElems}
            </div>

            <Link to="/comics" className="single-info__back">
              Back to all
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleById;
