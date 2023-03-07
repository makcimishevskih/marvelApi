import { Component } from "react";
import Error from "../error/Error";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState((state) => ({ ...state, error, errorInfo }));
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;

    if (errorInfo) {
      return <Error />;
    }

    return children;
  }
}

export default ErrorBoundary;
