import axios from "axios";
import { useEffect, useState } from "react";

function EndService() {
  const [data, setData] = useState(null);

  const controller = new AbortController();

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        { signal: controller.signal }
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
      console.log(axios.isCancel(error));
    }
  };

  useEffect(() => {
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <div>{data ? <p>Loaded {data.length} posts</p> : <p>Loading...</p>}</div>
    </>
  );
}

export default EndService;
