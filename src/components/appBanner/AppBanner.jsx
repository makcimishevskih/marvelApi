import "./appBanner.scss";

import avengersDecoration from "../../resources/img/Avengers.png";
import avengersLogo from "../../resources/img/Avengers_logo.png";

const AppBanner = () => {
    return (
        <div className="app-banner">
            <img
                className="app-banner__decoration"
                src={avengersDecoration}
                alt="Avengers"
            />
            <div className="app-banner__text">
                New comics every week!
                <br />
                Stay tuned!
            </div>
            <img
                className="app-banner__logo"
                src={avengersLogo}
                alt="Avengers logo"
            />
        </div>
    );
};

export default AppBanner;
