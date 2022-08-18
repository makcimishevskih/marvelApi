import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import { useEffect, useState } from 'react';
import useMarvelService from '../../services/MarvelService';
import Preloader from '../preloader/Preloader';
import Error from '../error/Error';
import PropTypes from 'prop-types';


const RandomChar = () => {
    const {error, loader, getRandomCharacter, clearError } = useMarvelService();

    const [timer, setTimer] = useState(100000);
    const [randomChar, setRandomChar] = useState({})
    

    useEffect(() => {
        getRandomChar();

        const timerId = setInterval(() => {
            getRandomChar();
        }, timer);

        if (!timer) {
            clearInterval(timerId);
        }
        return () => clearInterval(timerId);
    }, [timer]);


    const updateRandomChar = (randomChar) => {
        setRandomChar(randomChar);
    }

    const getRandomChar = () => {
        clearError();
        getRandomCharacter()
        .then(response => updateRandomChar(response))
    }


    const { description, title, homepage, wiki, thumbnail } = randomChar;

    const err = (error) && <Error />;
    const preloader = (loader) && <Preloader />;
    const imageStyle = (thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") ? { objectFit: 'fill' } : { objectFit: 'cover' };



    return (
        <div className="randomchar">

            {(!loader && !error) ? <div className="randomchar__block">
                <img style={imageStyle} src={thumbnail} alt="Random character" className="randomchar__img" />
                <div className="randomchar__info">
                    <p className="randomchar__name">{title}</p>
                    <p className="randomchar__descr">
                        {description}
                    </p>
                    <div className="randomchar__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
                :
                <>
                    {err}
                    {preloader}
                </>
            }

            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br />
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button
                    onClick={() => {
                        getRandomChar();
                        setTimer('');
                    }}
                    className="button button__main">
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
            </div>
        </div >
    );
}


// RandomChar.propTypes = {
//     randomChar: PropTypes.object,
//     updateRandomChar: PropTypes.func,
// }


export default RandomChar;