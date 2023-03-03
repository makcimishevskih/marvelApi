import "./charList.scss";
// import { flushSync } from "react-dom";
import { useEffect, useState } from "react";
import { useUpdateList } from "../../hooks/http.hook";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import useMarvelService from "../../services/MarvelService";

import Preloader from "../preloader/Preloader";
import Error from "../error/Error";

const CharList = ({ selectedCharId, updateSelectedChar }) => {
  const { loader, error, getAllCharactersData } = useMarvelService();
  const { charList, search, setCharList, updateCharList, clearCharList } =
    useUpdateList();

  const [newItemLoading, setNewItemLoading] = useState(false);
  const [btndisabled, setBtndisabled] = useState(true);
  const [total, setTotal] = useState(1559);
  const [offset, setOffset] = useState(
    +window.localStorage.getItem("offset") || 660
  );

  useEffect(() => {
    if (!window.localStorage.getItem("offset")) {
      window.localStorage.setItem("offset", offset);
    }
    getAllCharacters(false);
  }, []);

  useEffect(() => {
    if (+window.localStorage.getItem("offset") >= 1549) {
      window.localStorage.setItem("offset", total - 1);
      return;
    }
    window.localStorage.setItem("offset", offset - 9);
  }, [offset]);

  const getAllCharacters = (initial = false) => {
    initial ? setNewItemLoading(true) : setNewItemLoading(false);
    getAllCharactersData(offset)
      .then((charListData) => updateCharList(charListData))
      .then(() => finallyUpdate());
  };

  const finallyUpdate = () => {
    updateOffset();
    setBtndisabled(false);
  };

  const updateOffset = () => {
    if (offset >= total) {
      return;
    }
    if (total - offset < 9) {
      const difference = offset + (total - offset);
      setOffset(difference);
      return;
    }
    setOffset(offset + 9);
  };

  // useEffect(() => {
  //     if (offset === total) { return;}
  //     window.addEventListener('scroll', handlerOnScroll);
  //     return () => { window.removeEventListener('scroll', handlerOnScroll);} }, [offset])

  // const handlerOnScroll = () => {
  //     if (document.documentElement.scrollTop === document.documentElement.scrollHeight - document.documentElement.clientHeight && document.documentElement.scrollTop !== 0) {
  //         getAllCharacters();}}

  const getCharId = (id) => {
    updateSelectedChar(id);
  };

  const chooseElemFromKeys = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const el = e.target;
      const charList = document.querySelectorAll(".char__item");
      const selectedElemId = +el.getAttribute("id");

      charList.forEach((item) => {
        item.classList.remove("active");
      });

      el.classList.add("active");
      getCharId(selectedElemId);
      el.blur();
    }
  };

  const getMoreChars = (offset) => {
    // flushSync(() =>
    updateOffset();
    // );
    setBtndisabled(!btndisabled);
    getAllCharacters(offset);
  };

  const duration = 800;

  const chars = (
    <TransitionGroup className="char__flex">
      {charList.map((el) => {
        const imageStyle =
          el.thumbnail ===
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
            ? { objectFit: "fill" }
            : { objectFit: "cover" };
        const itemClazz =
          selectedCharId === el.id ? "char__item active" : "char__item";

        return (
          <CSSTransition key={el.id} timeout={duration} classNames="my-char">
            <li
              onClick={() => getCharId(el.id)}
              onKeyDown={chooseElemFromKeys}
              id={el.id}
              tabIndex="0"
              className={itemClazz}
            >
              <div>
                <img style={imageStyle} src={el.thumbnail} alt={el.name} />
              </div>
              <div className="char__name">{el.title}</div>
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );

  const checkPreloader = loader && charList.length === 0 && !newItemLoading && (
    <Preloader />
  );
  const checkErrors = error && <Error />;

  // const btnStyles = (
  //     <button
  //         disabled={btndisabled}
  //         onClick={() => getMoreChars(offset)}
  //         className='button button__main button__long'>
  //         <div className='inner'>load more</div>
  //     </button>
  // );

  return (
    <div className="char__list">
      {checkPreloader}
      {checkErrors}
      {chars}
      <button
        disabled={btndisabled}
        onClick={() => getMoreChars(offset)}
        className="button button__main button__long"
      >
        <div className="inner">load more</div>
      </button>
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
