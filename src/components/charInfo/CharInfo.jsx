import "./charInfo.scss";
import { useEffect, useState } from "react";
import Preloader from "../preloader/Preloader";
import Error from "../error/Error";
import CharBasics from "./charBasics/CharBasics";
import Skeleton from "../skeleton/Skeleton";
import useMarvelService from "../../services/MarvelService";
import { CSSTransition } from "react-transition-group";

const CharInfo = ({ selectedCharId }) => {
    const { loader, error, getCharacterByIdData, clearError } =
        useMarvelService();
    const [character, setCharacter] = useState(null);
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        getCharacter();
    }, [selectedCharId]);

    useEffect(() => {
        setShowInfo(true);
    }, []);

    const updateCharacter = (character) => {
        setCharacter((char) => character);
    };

    const getCharacter = () => {
        if (!selectedCharId) {
            return;
        }
        clearError();
        getCharacterByIdData(selectedCharId).then((data) =>
            updateCharacter(data)
        );
        setShowInfo(true);
    };

    const preloader = loader && <Preloader />;
    const isError = error && <Error />;
    const skeleton = !character && !error && !loader && <Skeleton />;
    const char = character && !loader && !error && (
        <CharBasics character={character} />
    );

    const duration = 1400;

    return (
        <CSSTransition
            in={showInfo}
            mountOnEnter
            timeout={duration}
            classNames='my-info'>
            <div className='char__info'>
                {char}
                {skeleton}
                {preloader}
                {isError}
            </div>
        </CSSTransition>
    );
};

export default CharInfo;
