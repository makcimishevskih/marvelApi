import './charBasics.scss';
import { Component } from 'react';


class CharBasics extends Component {
    constructor(props) {
        super(props);
    }

    getComicsTransform = (arr) => {
        let newArr = [];
        if (arr.length > 10) {
            newArr = arr.slice(0, 10);
        } else if (!arr.length) {
            newArr = 'Sorry... We dont have comics with this character...';
        } else {
            newArr = arr;
        }
        return newArr;
    }

    render() {
        const { character: { description, comics, name, thumbnail, wiki, homepage } } = this.props;

        let sliced = this.getComicsTransform(comics);

        const charComics = (typeof sliced === 'string') ? sliced : sliced.map(el => {
            return (
                <li key={el} className="char__comics-item" >
                    {el}
                </li>
            );
        })

        return (
            <div className="char__info">
                <div className="char__basics">
                    <img src={thumbnail} style={(thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") ? { objectFit: 'fill' } : { objectFit: 'cover' }} alt={name} />

                    <div>
                        <div className="char__info-name">{name}</div>
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
                <div className="char__descr">
                    {description}
                </div>


                <div className="char__comics">Comics:</div>
                <ul className="char__comics-list">

                    {charComics}
                </ul>
            </div >
        );
    }
}

export default CharBasics;