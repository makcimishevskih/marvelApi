import { Link } from "react-router-dom";
import { useField } from "formik";
import PropTypes from "prop-types";

import useMarvelService from "../../../services/MarvelService";

const MyInput = ({ label, request = [], ...props }) => {
  const [field, meta] = useField(props);
  const { loader, error } = useMarvelService();

  const requiredFieldError =
    meta.error &&
    meta.touched &&
    !loader &&
    JSON.stringify(request) &&
    !error ? (
      <div className="error">{meta.error}</div>
    ) : null;

  console.log(request);

  const noCharError =
    field.value &&
    !loader &&
    !error &&
    !request &&
    meta.touched &&
    JSON.stringify(request) ? (
      <div className="error">Character not found</div>
    ) : null;

  const successMessage = request && request.length > 0 && !loader && !error && (
    <div className="hero-page__wrapper">
      <label className="success">There is! Visit {request[0].name} page?</label>
      <Link to={`/${request[0].id}`} className="button button__secondary">
        <div style={{ display: "block" }} className="inner">
          hero page
        </div>
      </Link>
    </div>
  );
  return (
    <>
      <label id={props.id}>{label}</label>
      <div className="input__wrapper">
        <input {...field} {...props}></input>
        <button type="submit" className="button button__main">
          <div className="inner">Find</div>
        </button>
      </div>

      {noCharError}
      {requiredFieldError}
      {successMessage}
    </>
  );
};

export default MyInput;

MyInput.propTypes = {
  // label, request, ...props
  label: PropTypes.string,
  request: PropTypes.array,

  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};
