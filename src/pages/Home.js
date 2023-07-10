import React from "react";
import Search from "../components/Search";
import { useGlobalContext } from "../context";
import Loading from "../components/Loading";
import Country from "../components/Country";

const Home = () => {
  const { countries, loading } = useGlobalContext();

  return (
    <main>
      <div className="section">
        <Search />
        {loading ? (
          <Loading />
        ) : (
          <div className="countries">
            {countries.map((item) => {
              return <Country key={item.countryCode} {...item} />;
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
