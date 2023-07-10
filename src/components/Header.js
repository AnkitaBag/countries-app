import { Link } from "react-router-dom";

const Header = () => {


  return (
    <header>
      <div className="section">
        <h2>
          <Link to="/">Countries App</Link>
        </h2>
      </div>
    </header>
  );
};

export default Header;
