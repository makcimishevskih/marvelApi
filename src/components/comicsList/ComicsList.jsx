import "./comicsList.scss";
import useMarvelService from "../../services/MarvelService";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Preloader from "../preloader/Preloader";
import Error from "../error/Error";

const ComicsList = ({ comicsList, updateComicsList }) => {
  const { loader, error, clearError, getAllComicsData } = useMarvelService();
  const [offset, setOffset] = useState(200);
  const [newComics, setNewComics] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [delayCounter, setDelayCounter] = useState(0);

  useEffect(() => {
    getAllComics(true);
  }, []);

  const getAllComics = (initial) => {
    clearError();
    initial ? setNewComics(false) : setNewComics(true);
    getAllComicsData(offset)
      .then((comicsData) => updateComicsList(comicsData.data.results))
      .then(() => finallyUpdate());
  };

  const finallyUpdate = () => {
    setOffset(offset + 8);
    setDisabled(false);
    setNewComics(true);
  };

  const updateComicsHandler = () => {
    setInProp(!inProp);
    setDisabled(true);
    setDelayCounter((delayCounter) => delayCounter + 1);
    getAllComics();
  };

  const preloader = loader && !newComics ? <Preloader /> : null;

  const errorComp = error && <Error />;

  const [inProp, setInProp] = useState(false);

  const durationComics = 1000;
  let delayIndex = -1;
  const delayJump = 100;
  let delayDifference = delayCounter * 800;

  return (
    <div className="comics__list">
      {preloader}
      {errorComp}

      <TransitionGroup className="comics__grid">
        {comicsList.map((el, i) => {
          delayIndex += newComics ? 1 : 0;
          const delay = Math.floor(
            Math.max(0, delayIndex * delayJump - delayDifference)
          );

          return (
            <CSSTransition
              key={el.id}
              classNames="my-comics"
              timeout={durationComics + delay}
            >
              <li
                className="comics__item"
                style={{ transitionDelay: `${delay}ms` }}
              >
                <Link to={`/comics/${el.id}`}>
                  <img
                    src={`${el.thumbnail.path}.${el.thumbnail.extension}`}
                    alt={el.name}
                    className="comics__item-img"
                  />
                  <div className="comics__item-name">{el.title}</div>
                  <div className="comics__item-price">
                    {!el.price ? "Not Available" : `${el.price}$`}
                  </div>
                </Link>
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>

      {newComics && (
        <button
          disabled={disabled}
          onClick={updateComicsHandler}
          className="button button__main button__long"
        >
          <div className="inner">load more</div>
        </button>
      )}
    </div>
  );
};

export default ComicsList;
