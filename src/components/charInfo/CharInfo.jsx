import './charInfo.scss';
import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Preloader from '../preloader/Preloader';
import Error from '../error/Error';
import CharBasics from './charBasics/CharBasics';
import Skeleton from '../skeleton/Skeleton';

const marvelService = new MarvelService();

class CharInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: null,
            loader: '',
            error: '',
        }
    }


    componentDidMount = () => {
        this.getCharacter();
    }

    componentDidUpdate = (prevProp) => {
        if (prevProp.selectedCharId !== this.props.selectedCharId) {
            this.getCharacter();
        }
    }


    updateCharacter = (character) => {
        this.setState(state => ({ character }));
    }

    onCharLoader = () => {
        this.setState(state => ({ loader: !this.state.loader }));
    }

    onError = () => {
        this.setState(state => ({ loader: !this.state.loader, error: true }));
    }

    getCharacter = () => {
        if (!this.props.selectedCharId) {
            return;
        }
        this.onCharLoader();

        marvelService.getCharacterById(this.props.selectedCharId)
            .then(data => this.updateCharacter(data))
            .then(() => this.onCharLoader())
            .catch((e) => this.onError())
    }

    componentWillUnmount() {
        this.setState(state => ({ error: '', loader: '' }));
    }


    render() {
        const { character, loader, error } = this.state;

        const preloader = (loader) && <Preloader />;
        const isError = (error) && <Error />;
        const skeleton = (!character && !error && !loader) && <Skeleton />;

        return (
            <div className="char__info">
                {(character && !loader && !error) ?
                    
                    <CharBasics character={character} />
                    :
                    <>
                        {skeleton}
                        {preloader}
                        {isError}
                    </>
                }
            </div >
        );
    }
}

export default CharInfo;