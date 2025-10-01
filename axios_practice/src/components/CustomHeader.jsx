import axios from "axios";
import { useEffect } from "react";

function CustomHeader() {
  const custom = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/", {
      headers: {
        Authorization: "Faketoken_12331",
        "Content-Type": "application/js",
        pragma: "nothing",
      },
    });
    console.debug("Header : ", res);
  };

  useEffect(() => {
    custom();
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}

export default CustomHeader;
