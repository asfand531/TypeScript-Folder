import { useEffect } from "react";
import axios from "axios";

function DeletePost() {
  const del = async (id) => {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      if (response.status === 200) {
        console.log(`Post with id ${id} deleted successfully.`);
      } else {
        console.log(`Unexpected status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error >>> ", error);
    }
  };

  useEffect(() => {
    del(1);
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}

export default DeletePost;
