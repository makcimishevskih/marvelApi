import "./preloader.scss";
import { Grid } from "react-loader-spinner";
import "../../style/variables.scss";

const Preloader = () => {
    return (
        <div className='preloader__wrapper'>
            <Grid wrapperStyle color='#e83146' height={80} width={80} />
        </div>
    );
};

export default Preloader;
