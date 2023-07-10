import { useGlobalContext } from "../context";
import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";

import Loading from "./Loading";


const SingleCountry = () => {
  const countryName = useParams();
  const { loading, setLoading } = useGlobalContext();
  const [singleCountry, setSingleCountry] = useState([]);

  const url = "https://restcountries.com/v3.1/alpha/";

  let id = countryName.countryCode;

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      let response = await fetch(`${url}${id}`);
      let data = await response.json();
      setSingleCountry(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  
  return (
    <>
      {singleCountry.map((country) => {
        const {
          name: {common},
          capital = '',
          flags = {},
          population,
          borders = [],
          currencies,
          languages
        } = country;
        return (
          <>
            <div className="singleCountry__row">
              <div className="flagContainer">
                <img src={flags?.svg} alt={`Flag of ${common} `} />
              </div>
              <div className="infoContainer">
                <h1>{common}</h1>
                <div className="infoContainer__basicInfo">
                <h4>
                    Capital : <span>{capital}</span>
                  </h4>
                  <h4>
                    Population :{" "}
                    <span>
                      {population?.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </h4>
                  <h4> Currency : {" "}
                  {Object?.keys(currencies)?.map((item, i) => (
                  <span key={i}>
                    {`${currencies[item].name} `}
                    {Object.keys(currencies).length > 1 &&
                    currencies[item] !==
                      currencies[
                        Object.keys(currencies)[
                          Object.keys(currencies).length - 1
                        ]
                      ]
                      ? `, `
                      : ''}
                  </span>
                ))}
                  </h4>
                  <h4> Language : {" "}
                  {Object?.keys(languages)?.map((item, i) => (
                  <span key={i}>
                    {`${languages[item]} `}
                    {Object.keys(languages).length > 0 &&
                    languages[item] !==
                      languages[
                        Object.keys(languages)[
                          Object.keys(languages).length - 1
                        ]
                      ]
                      ? ` `
                      : ''}
                  </span>
                ))}
                  </h4>
                </div>
                {borders?.length > 1 && (
                <div className="infoContainer__borders">
                  <h4>
                    Borderering Countries:
                    <ul>
                      {borders?.map((border, index) => {
                      return (
                        <><Link key={index} to={`/country/${border}`}>
                          <li>{border}</li>
                        </Link></>
                        );
                      })}
                    </ul>
                  </h4>
                </div>
                )}
              </div>
            </div>

          </>
        )
      })}
    </>

  ) 
};

export default SingleCountry;
