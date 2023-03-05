import { useEffect, useState } from "react";
import "./charBasics.scss";

// let sliced = getComicsTransform(comics);

function getComicsTransform(arr) {
  let newArr;
  if (arr.length === 0) {
    newArr = "Sorry... We dont have comics with this character...";
  } else if (arr.length > 10) {
    newArr = arr.slice(0, 10);
  } else {
    newArr = arr.slice();
  }
  return newArr;
}

const CharBasics = ({ character }) => {
  const { description, comics, title, thumbnail, wiki, homepage } = character;
  const [isOpen, setIsOpen] = useState(false);

  const charComics = !!comics.length ? (
    comics.map((el, i) => {
      return (
        <li key={`${el}_${i}`} className="char__comics-item">
          {el}
        </li>
      );
    })
  ) : (
    <div>No comics</div>
  );

  return (
    <>
      <div className="char__basics">
        <div className="img__wrapper">
          <img
            src={thumbnail}
            style={
              thumbnail ===
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
                ? { objectFit: "fill" }
                : { objectFit: "cover" }
            }
            alt={title}
          />
        </div>

        <div>
          <div className="char__info-name">{title}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>

      <div className="char__descr">{description}</div>

      <div className="char__comics">Comics:</div>
      <ul
        className={
          charComics.length > 5 && !isOpen && Array.isArray(charComics)
            ? "char__comics-list"
            : "char__comics-list sliced"
        }
      >
        {charComics}
      </ul>

      {comics.length > 5 ? (
        <div
          className={
            isOpen
              ? "char__comics-button down-button"
              : "char__comics-button up-button"
          }
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        ></div>
      ) : null}
    </>
  );
};

export default CharBasics;
