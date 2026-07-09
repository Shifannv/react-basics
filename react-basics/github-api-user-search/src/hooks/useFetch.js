import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    setLoading(true);

    setError("");

    axios.get(url)
    .then((response) => {setData(response.data);
    setLoading(false);
      })

      .catch(() => {

        setError("User Not Found");

        setLoading(false);

      });

  }, [url]);

  return {

    data,

    loading,

    error,

  };

}

export default useFetch;