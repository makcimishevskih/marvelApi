import "./singleComicPage.scss";
import { Link, useParams, useNavigate } from "react-router-dom";
import useMarvelService from "../../services/MarvelService";
import { useEffect, useState } from "react";
import Preloader from "../preloader/Preloader";
import Error from "../error/Error";
import { Helmet } from "react-helmet";

const SinglePage = ({ type }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const {
        loader,
        error,
        getComicsByIdData,
        getCharacterByIdData,
        clearError,
    } = useMarvelService();

    const [data, setData] = useState(null);

    useEffect(() => {
        clearError();
        switch (type) {
            case "comics":
                getComicsByIdData(id).then((comic) => onDataLoaded(comic));
                break;
            case "char":
                getCharacterByIdData(id).then((char) => onDataLoaded(char));
                break;
        }
    }, [id]);

    const onDataLoaded = (data) => {
        setData((prevS) => data);
    };

    const err = error && <Error />;
    const preloader = loader && <Preloader />;
    const helmetSEO = data ? (
        <Helmet>
            <meta charSet='utf-8' name='descrition' />
            <title>{data.title} Info</title>
        </Helmet>
    ) : (
        <Helmet>
            <meta charSet='utf-8' name='descrition' />
            <title>Single {type} Info</title>
        </Helmet>
    );
    return (
        <>
            {helmetSEO}
            {err}
            {preloader}
            {!loader && !error && data && (
                <div className='single'>
                    <>
                        <img
                            src={data.thumbnail}
                            alt={data.title}
                            className='single__img'
                        />
                        <div className='single__info'>
                            <h2 className='single__name'>{data.title}</h2>
                            <p className='single__descr'>{data.description}</p>

                            {!loader && !error && data && type === "comics" && (
                                <>
                                    <p className='single__descr'>
                                        {data.pages}
                                    </p>
                                    <p className='single__descr'>
                                        Language: en-us
                                    </p>
                                    <div className='single__price'>
                                        {data.price}
                                    </div>
                                </>
                            )}
                        </div>
                        <Link
                            onClick={() => navigate(-1)}
                            to=''
                            className='single__back'>
                            Back to all
                        </Link>
                    </>
                </div>
            )}
        </>
    );
};

export default SinglePage;
