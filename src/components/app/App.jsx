import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';
import { Component } from "react";

import MarvelService from '../../services/MarvelService';
import Preloader from "../preloader/Preloader";
import Skeleton from "../skeleton/Skeleton";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";


const marvelRes = new MarvelService();


// СВОРАЧИВАНИЕ ГЕРОЕВ ПРИ КЛИКЕ НА CANT LOAD MORE В CHARLIST
// const collapseChars = () => {
//     setOffset(660);
// }


class App extends Component {
    constructor() {
        super();
        this.state = {
            charList: [],

            comicsList: [],

            activePage: 'Characters',

            selectedCharId: null,

            search: '',

            timer: true,

        }
    }


    updateTimer = () => {
        this.setState(state => ({ timer: !this.state.timer }));
    }

    // FILTERED CHARACTERS ARRAY
    getFilterArr = (arr, search) => {
        return arr.filter(el => el.name.indexOf(search) > -1);
    }

    // UPDATE ACTIVE CHARACTER
    updateSelectedChar = (selectedCharId) => {
        this.setState(state => ({ selectedCharId }));
    }

    //CHAR LIST 
    updateCharList = (newCharList) => {
        this.setState(state => ({ charList: [...state.charList, ...newCharList] }));
    }

    // COMICS LIST
    updateComicsList = (comicsList) => {
        this.setState(state => ({ comicsList }));
    }

    //ACTIVE PAGE >>> CHAR OR COMICS 
    updateActivePage = (activePage) => {
        this.setState(state => ({ activePage }));
    }


    render() {

        const { charList, selectedCharId, search, activePage } = this.state;
        let filteredArr;
        if (!charList) {
            filteredArr = charList;
        } else {
            filteredArr = this.getFilterArr(charList, search);

        }


        return (

            (activePage === 'Characters') ?
                // return (
                <div className="app" onScroll={this.scroll}>
                    <AppHeader activePage={activePage} updateActivePage={this.updateActivePage} />
                    <main>


                        {/* <ErrorBoundary>
                            < RandomChar
                            />
                        </ErrorBoundary> */}

                        <div className="char__content">
                            <ErrorBoundary>
                                <CharList activePage={activePage} updateSelectedChar={this.updateSelectedChar} selectedCharId={selectedCharId} charList={filteredArr} updateCharList={this.updateCharList} />
                            </ErrorBoundary>

                            <ErrorBoundary>
                                <CharInfo selectedCharId={selectedCharId} />
                            </ErrorBoundary>


                        </div>

                        <img className="bg-decoration" src={decoration} alt="vision" />
                    </main>
                </div>





                :
                <div>
                    <div>COMICS</div>
                    <AppHeader activePage={activePage} updateActivePage={this.updateActivePage} />

                </div>
        );
    }
}

export default App;