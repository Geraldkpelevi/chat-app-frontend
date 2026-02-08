import { Link } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1 className="">404</h1>
      <p>Page not found</p>
      <p>The link may be broken, or the account may have been removed.</p>

      <Link
        to="/"
        className="page-not-found-link"
      >
        Go to Login
      </Link>
    </div>
  );
}

export default PageNotFound;
