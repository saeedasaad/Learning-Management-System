import { useState, useEffect } from "react";
import api from "../utils/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    api.get(url)
      .then((res) => {
        if (isMounted) setData(res.data);
      })
      .catch((err) => setError(err.response?.data?.error || err.message))
      .finally(() => setLoading(false));

    return () => { isMounted = false; };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
