import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("a");
  const [searchType, setSearchType] = useState("name");

  const apiUrl = "https://restcountries.com/v3.1/";


  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      let response = await fetch(`${apiUrl}${searchType}/${search}`);
      let data = await response.json();
      if (data) {
        const countryData = data.map((info) => {
          const {
            cca3,
            capital,
            flags,
            name: { common },
            region,
            population,
            borders,
          } = info;
          return {
            countryCode: cca3,
            capital,
            flags,
            countryName: common,
            region,
            population,
            borders,
          };
        });
        setCountries(countryData);
      } else {
        setCountries([]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(`error je: ${error}`);
    }
  }, [search, searchType]);

  useEffect(() => {
    fetchData();
  }, [search, fetchData]);

  return (
    <AppContext.Provider
      value={{
        countries,
        loading,
        setLoading,
        setSearch,
        search,
        setSearchType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
