import gif from '../../resources/error.gif';
import './error.scss';

const Error = () => {
    return (
        <img className='error__img' src={gif} alt="Error" />
    )
}

export default Error;