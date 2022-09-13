import { useState, useEffect } from "react";


const useFetch = (url) => {

  const [loading, setLoading] = useState(false); // true|false
  const [data, setData] = useState(null); // null|Response
  const [error, setError] = useState(null); // null|Error|false

  useEffect(() => {
    // loading prima che la fetch venga completata
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setError(false);
      })
      .catch((err) => {
        // scatena errore
        setError(err.message);
      })
      .finally(() => {
        // azione in conclusione
        setLoading(false);
      });
  }, [url]);

  return { loading, data, error };
};

export default useFetch;
