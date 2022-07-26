import './charList.scss';
import MarvelService from '../../services/MarvelService';
import { useEffect, useState } from 'react';
import Preloader from '../preloader/Preloader';
import Error from '../error/Error';
import PropTypes from 'prop-types';


const CharList = ({ activePage, charList, updateCharList, selectedCharId, updateSelectedChar }) => {
    const marvelService = new MarvelService();


    const [offset, setOffset] = useState(+window.localStorage.getItem('offset') || 660);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(false);
    const [btndisabled, setBtndisabled] = useState(false);
    const [total, setTotal] = useState(1559);


    useEffect(() => {
        if (!window.localStorage.getItem('offset')) {
            window.localStorage.setItem('offset', offset);
        }
        getAllCharacters();
    }, [])

    useEffect(() => {
        if (+window.localStorage.getItem('offset') >= 1549) {
            window.localStorage.setItem('offset', total - 1);
            return;
        }
        window.localStorage.setItem('offset', offset - 9);
    }, [offset])

    useEffect(() => {
        if (offset === total) {
            return;
        }

        window.addEventListener('scroll', handlerOnScroll);
        return () => {
            window.removeEventListener('scroll', handlerOnScroll);
        }
    }, [offset])

    const handlerOnScroll = () => {
        if (activePage !== 'Characters') {
            return;
        }

        if (document.documentElement.scrollTop === document.documentElement.scrollHeight - document.documentElement.clientHeight && document.documentElement.scrollTop !== 0) {
            getAllCharacters();
        }
    }

    const getAllCharacters = () => {
        marvelService.getAllCharacters(offset)
            .then(charList => updateCharList(charList))
            .then(() => finallyUpdate())
            .catch((e) => onError())
    }

    const finallyUpdate = () => {
        updateOffset();
        setLoader(false);
        setLoader(false)
        setBtndisabled(false);
    }

    const onError = () => {
        setLoader(false)
        setError(true);
    }

    const getId = (id) => {
        updateSelectedChar(id);
    }

    const chooseElemFromKeys = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const el = e.target;
            const charList = document.querySelectorAll('.char__item');
            const selectedElemId = +el.getAttribute('id');
    
            charList.forEach(item => {
                item.classList.remove('active');
            });

            el.classList.add('active');
            getId(selectedElemId)
            el.blur();
        }
    }

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
    }

    const getMoreChars = (offset) => {
        setBtndisabled(true);
        getAllCharacters(offset);
    }

    const chars = charList.map(el => {
        const imageStyle = (el.thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") ? { objectFit: 'fill' } : { objectFit: 'cover' };

        const itemClazz = (selectedCharId === el.id) ? "char__item " + "active" : "char__item";

        return <li onClick={() => getId(el.id)}
            onKeyDown={chooseElemFromKeys}
            id={el.id}
            tabIndex='0'
            className={itemClazz}
            key={el.id}>
            <img style={imageStyle} src={el.thumbnail} alt={el.name} />
            <div className="char__name">{el.name}</div>
        </li>
    });

    const preloader = (loader) && <Preloader />;
    const checkErrors = (error) && <Error />;

    const btn = (offset >= total) ?
        <button
            className="button button__main button__long" >
            <div className="inner">Cant load more</div>
        </button >
        :
        <button
            disabled={btndisabled}
            onClick={() => getMoreChars(offset)}
            className="button button__main button__long">
            <div className="inner">load more</div>
        </button>;


    return (
        <>
            {(loader || error) ?
                <>
                    {preloader}
                    {checkErrors}
                </>
                :
                <div className="char__list">
                    <ul className="char__grid">
                        {chars}
                    </ul>
                    {btn}
                </div>
            }
        </>
    )
}


CharList.propTypes = {
    activePage: PropTypes.string.isRequired, 
    charList: PropTypes.array,
    updateCharList: PropTypes.func,
    selectedCharId: PropTypes.number,
    updateSelectedChar: PropTypes.func,
}
    

export default CharList;