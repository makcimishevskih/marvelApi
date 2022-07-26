import './randomCharClassCopy.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import { Component, useEffect, useState } from 'react';
import MarvelService from '../../services/MarvelService';
import Preloader from '../preloader/Preloader';
import Error from '../error/Error';


class RandomCharClassCopy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: true,
            error: false,

        }
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.getRandomChar();
        if (this.props.timer) {
            this.timerId = setInterval(() => {
                // this.getRandomChar();
                console.log('000');
            }, 2000)
        }
    }


    handler = () => {
        this.getRandomChar();
        this.props.updateTimer();
    }



    onError = () => {
        this.setState(state => ({ loader: false }));
        this.setState(state => ({ error: true }));
    }

    getRandomChar = () => {
        this.setState(state => ({ loader: true }));
        this.marvelService.getRandomChar().then(response => this.props.updateRandomChar(response))
            .catch(this.onError)
            .finally(() => this.setState(state => ({ loader: false })));
    }

    render() {
        const { randomChar: { description, name, homepage, wiki, thumbnail }, updateRandomChar } = this.props;
        const { error, loader } = this.state;


        const err = (error) && <Error />;
        const preloader = (loader) && <Preloader />;

        const imageStyle = (thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") ? { objectFit: 'fill' } : { objectFit: 'cover' };



        return (

            <div className="randomchar" >

                {(!loader && !error) ?
                    <div className="randomchar__block">
                        <img style={imageStyle} src={thumbnail} alt="Random character" className="randomchar__img" />
                        <div className="randomchar__info">
                            <p className="randomchar__name">{name}</p>
                            <p className="randomchar__descr">
                                {(!description ? "Sorry...We don't have description for this hero..." : `${description.slice(0, 230)}...`)}
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

                <div className="randomchar__static" >
                    <p className="randomchar__title">
                        Random character for today!<br />
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button
                        onClick={() => {
                            this.handler();
                        }}
                        className="button button__main">
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
                </div>
            </div >
        );
    }
}

export default RandomCharClassCopy;