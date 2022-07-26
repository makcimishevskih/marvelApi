import './appHeader.scss';

const AppHeader = ({ activePage, updateActivePage }) => {

    const onClickHandler = (e) => {
        updateActivePage(e.target.textContent);
    }


    const characterStyle = (activePage === 'Characters') ? 'active' : '';
    const ComicsStyle = (activePage === 'Comics') ? 'active' : '';

    return (
        <header className="app__header">
            <h1 className="app__title">
                <a href="#">
                    <span>Marvel</span> information portal
                </a>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li onClick={onClickHandler}><a className={characterStyle} href="#">Characters</a></li>
                    /
                    <li onClick={onClickHandler}><a className={ComicsStyle} href="#">Comics</a></li>
            </ul>
        </nav>
        </header >
    )
}

export default AppHeader;