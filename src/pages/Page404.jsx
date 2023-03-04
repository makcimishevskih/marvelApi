import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Error from "../components/error/Error";

const Page404 = () => {
    const styleP = {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "24px",
        color: "#9F0013",
    };
    const styleLink = {
        display: "block",
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "bold",
    };

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" name="descrition" />
                <title>Error</title>
            </Helmet>
            <Error />
            <p style={styleP}>Page doesn't exist</p>
            <Link to="/" style={styleLink}>
                Back to main page
            </Link>
        </div>
    );
};

export default Page404;
