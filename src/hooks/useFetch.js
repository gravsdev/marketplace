import { useEffect, useState } from "react";
import { API_URL } from "../config/env";

function useFetch(endpoint, method = "GET", body = null, headers = {}) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body && JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        // console.log(data.data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [endpoint, method, body, headers]);

  return { data, error, loading };
}

export default useFetch;
