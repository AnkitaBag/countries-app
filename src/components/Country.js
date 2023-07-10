import React from "react";
import { Link } from "react-router-dom";

const Country = ({
  countryCode,
  countryName,
  flags,
  capital,
  population,
}) => {
  return (
    <Link to={`/country/${countryCode}`}>
      <div className="country">
        <img src={flags.png} alt={countryName} />
        <div className="country__info">
          <h3>{countryName}</h3>
          <p>
            Capital: <span>{capital}</span>
          </p>
          <p>
            Population:{" "}
            <span>
              {population.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Country;
