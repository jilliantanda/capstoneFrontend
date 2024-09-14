import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="nav">
    <h1> header component </h1>
      <Link to="/goals">
        <div className="title-text">
          <span>Coding Goals</span>

        </div>
      </Link>
    </nav>
  );
};

export default Header;
