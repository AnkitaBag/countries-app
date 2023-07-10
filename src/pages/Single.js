import { Link } from "react-router-dom";

import SingleCountry from "../components/SingleCountry";

import { MdKeyboardBackspace } from "react-icons/md";

const Single = () => {
  return (
    <main className="singlePage">
      <div className="section">
        <Link to="/" className="backBtn">
          <MdKeyboardBackspace /> Back
        </Link>
        <section className="singleCountry">
          <SingleCountry />
        </section>
      </div>
    </main>
  );
};

export default Single;
