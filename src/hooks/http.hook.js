import { useState, useEffect, useCallback } from "react";

export const useHttp = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  let counter = 0;

  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = {
        "Content-Type": "application/json",
      }
    ) => {
      setLoader(true);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
        });
        if (!response.ok) {
          counter++;
          if (counter === 3) {
            counter = 0;
            throw new Error(
              `Could not fetch ${url} , status: ${response.status}`
            );
          } else {
            setTimeout(() => {}, 5000);
            return;
          }
        }

        const data = await response.json();
        setLoader(false);

        return data;
      } catch (e) {
        console.log("counter catch: ", counter);
        setLoader(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    loader,
    error,
    request,
    clearError,
  };
};

export const useUpdateList = () => {
  const [charList, setCharList] = useState([]);
  const [search, setSearch] = useState("");

  const getFilterArr = useCallback(
    (arr, search) => {
      const filteredArray = arr.filter((el) => el.name.indexOf(search) > -1);
      return filteredArray;
    },
    [charList, search]
  );

  useEffect(() => {
    if (charList.length === 0) return;
    setCharList((prevState) => getFilterArr(prevState, search));
  }, [search]);

  const clearCharList = () => {
    setCharList((prevState) => []);
  };

  const updateCharList = useCallback((newChars) => {
    setCharList((charList) => [...charList, ...newChars]);
  }, []);

  return {
    search,
    charList,
    setCharList,
    updateCharList,
    clearCharList,
  };
};
