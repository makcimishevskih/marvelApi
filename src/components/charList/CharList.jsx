import "./charList.scss";
import { useState, useEffect } from "react";
import { useUpdateList } from "../../hooks/http.hook";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import useMarvelService from "../../services/MarvelService";

import Preloader from "../preloader/Preloader";
import Error from "../error/Error";

const CharList = ({ selectedCharId, updateSelectedChar }) => {
  const { loader, error, getAllCharactersData } = useMarvelService();
  const { charList, updateCharList } = useUpdateList();

  const offsetFromStorage = +window.localStorage.getItem("offset") || 1530;

  const [btndisabled, setBtndisabled] = useState(true);
  const [total] = useState(1559);
  const [offset, setOffset] = useState(offsetFromStorage);

  const getAllCharacters = (offset) => {
    getAllCharactersData(offset)
      .then((charListData) => updateCharList(charListData))
      .then(() => setBtndisabled(false));
  };

  const getMoreChars = (offset) => {
    if (offset === total) return;
    updateOffset();
    setBtndisabled((isBtnDisabled) => !isBtnDisabled);
  };

  const updateOffset = () => {
    if (offset !== total) {
      setOffset((offset) => offset + 9);
    } else if (total - offset < 9) {
      const difference = offset + (total - offset);
      setOffset(difference);
    }
  };

  const handlerOnScroll = () => {
    if (offset === total) return;
    if (
      document.documentElement.scrollTop ===
        document.documentElement.scrollHeight -
          document.documentElement.clientHeight &&
      document.documentElement.scrollTop !== 0
    ) {
      updateOffset();
    }
  };

  const handleClick = (id) => {
    updateSelectedChar(id);
    scrollToElement("info");
  };

  const scrollToElement = (id) => {
    const section = document.querySelector(`#${id}`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const chooseElemFromKeys = (e) => {
    const { target, keyCode } = e;

    if (keyCode === 13 || keyCode === 32) {
      e.preventDefault();
      const targetId = +target.id;

      handleClick(targetId);
      target.blur();
    }
  };

  useEffect(() => {
    getAllCharacters(offset);
  }, [offset]);

  useEffect(() => {
    if (+window.localStorage.getItem("offset") >= total - 10) {
      window.localStorage.setItem("offset", total - 1);
    } else {
      window.localStorage.setItem("offset", offset - 9);
    }
  }, [offset]);

  useEffect(() => {
    if (offset + 1 === total) {
      return;
    }
    window.addEventListener("scroll", handlerOnScroll);
    return () => {
      window.removeEventListener("scroll", handlerOnScroll);
    };
  }, []);

  const duration = 800;

  const chars = (
    <TransitionGroup className="char__grid">
      {charList.map((el) => {
        const imageStyle =
          el.thumbnail ===
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
            ? { objectFit: "fill" }
            : { objectFit: "cover" };
        const itemClass =
          selectedCharId === el.id ? "char__item active" : "char__item";

        return (
          <CSSTransition key={el.id} timeout={duration} classNames="my-char">
            <li
              onClick={() => handleClick(el.id)}
              onKeyDown={chooseElemFromKeys}
              id={el.id}
              tabIndex="0"
              className={itemClass}
            >
              <img style={imageStyle} src={el.thumbnail} alt={el.name} />

              <div className="char__name">{el.title}</div>
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );

  const button =
    offset !== total - 1 ? (
      <button
        disabled={btndisabled}
        onClick={() => getMoreChars(offset)}
        className="button button__main button__long"
      >
        <div className="inner">load more</div>
      </button>
    ) : (
      <button disabled={true} className="button button__main button__long">
        <div className="inner">no more chars</div>
      </button>
    );
  const preloader = loader && charList.length === 0 ? <Preloader /> : null;

  const checkErrors = error && <Error />;

  return (
    <div className="char__list">
      {preloader}
      {checkErrors}
      {chars}
      {button}
    </div>
  );
};

CharList.propTypes = {
  charList: PropTypes.array,
  updateCharList: PropTypes.func,
  selectedCharId: PropTypes.number,
  updateSelectedChar: PropTypes.func,
};

export default CharList;
