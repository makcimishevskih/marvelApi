import { useMemo } from "react";
import "./charBasics.scss";

const CharBasics = ({ character }) => {
    const { description, comics, name, thumbnail, wiki, homepage } = character;

    const getComicsTransform = (arr) => {
        let newArr;
        if (arr.length === 0) {
            newArr = "Sorry... We dont have comics with this character...";
        } else if (arr.length > 10) {
            newArr = arr.slice(0, 10);
        } else {
            newArr = arr;
        }
        return newArr;
    };

    let sliced = getComicsTransform(comics);

    const charComics =
        typeof sliced === "string"
            ? sliced
            : sliced.map((el, i) => {
                  return (
                      <li key={`${el}_${i}`} className='char__comics-item'>
                          {el}
                      </li>
                  );
              });

    return (
        <>
            <div className='char__basics'>
                <img
                    src={thumbnail}
                    style={
                        thumbnail ===
                        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
                            ? { objectFit: "fill" }
                            : { objectFit: "cover" }
                    }
                    alt={name}
                />

                <div>
                    <div className='char__info-name'>{name}</div>
                    <div className='char__btns'>
                        <a href={homepage} className='button button__main'>
                            <div className='inner'>homepage</div>
                        </a>
                        <a href={wiki} className='button button__secondary'>
                            <div className='inner'>Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='char__descr'>{description}</div>

            <div className='char__comics'>Comics:</div>
            <ul className='char__comics-list'>{charComics}</ul>
        </>
    );
};

export default CharBasics;
