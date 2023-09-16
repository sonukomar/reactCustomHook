import { useEffect, useState } from "react";

export const useApiCall = (url) => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => setData(e));
  }, [url]);

  return data;
};
