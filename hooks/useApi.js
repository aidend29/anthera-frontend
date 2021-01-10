import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    setData(response.data);
    //  console.log(response);
  };

  return { data, error, loading, request };
};
