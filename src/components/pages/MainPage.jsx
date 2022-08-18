import { useState } from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import RandomChar from "../randomChar/RandomChar";
import decoration from "../../resources/img/vision.png";
import MyForm from "../form/MyForm";
import { Helmet } from "react-helmet";

const MainPage = () => {
    const [selectedCharId, setSelectedCharId] = useState(null);

    const updateSelectedChar = (selectedCharId) => {
        setSelectedCharId((selectedId) => selectedCharId);
    };

    return (
        <>
            <Helmet>
                <meta charSet='utf-8' name='descrition' />
                <title>Marvel Application</title>
            </Helmet>
            <ErrorBoundary>
                <RandomChar />
            </ErrorBoundary>
            <div className='char__content'>
                <ErrorBoundary>
                    <CharList
                        updateSelectedChar={updateSelectedChar}
                        selectedCharId={selectedCharId}
                    />
                </ErrorBoundary>
                <div>
                    <ErrorBoundary>
                        <CharInfo selectedCharId={selectedCharId} />
                    </ErrorBoundary>
                    <MyForm></MyForm>
                </div>
            </div>
            <img className='bg-decoration' src={decoration} alt='vision' />
        </>
    );
};

export default MainPage;
