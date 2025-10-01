import axios from "axios";
import { useEffect } from "react";

function Multi_Request() {
  const multiReq = async () => {
    try {
      const req1 = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?userId=1"
      );
      const req2 = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      await axios.all([req1, req2]).then(
        axios.spread((res1, res2) => {
          console.log("Data from request one >>> ", res1.data);
          console.log("Data from request two >>> ", res2.data);
        })
      );

      const all = await axios.all([req1.data, req2.data]);
      console.debug(all);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    multiReq();
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}

export default Multi_Request;
