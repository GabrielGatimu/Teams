import { useState, useEffect } from "react";

function useFetchData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(`Error ${error}`));
  }, [url]);

  return { data };
}

export default useFetchData;
