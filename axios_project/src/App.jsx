import { useEffect, useState } from "react";
import PostsList from "./components/PostsList";
import Breadcrumbs from "./components/Breadcrumbs";
import axios from "axios";
import "./App.css";

function App() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPost = async () => {
    setLoading(true);

    const successMessages = {
      100: "Continue",
      200: "OK 'Request successful!'",
      201: "Created, 'New resource created!'",
      204: "No Content, 'Successful, but no body returned!'",
    };

    const errorMessages = {
      301: "Moved Permanently!",
      302: "Found!",
      304: "Not Modified!",
      400: "Bad Request!",
      401: "Unauthorized!",
      403: "Forbidden!",
      404: "Not Found!",
      429: "Too Many Requests!",
      500: "Internal Server Error!",
      502: "Bad Gateway!",
      503: "Service Unavailable!",
      504: "Gateway Timeout!",
    };

    try {
      const response = await axios.get("https://dummyjson.com/products/");
      const { data, status } = response;

      setStatus(
        successMessages[status]
          ? `${status} -> ${successMessages[status]}`
          : `${status} -> Unknown status`
      );

      console.log(data.products);
    } catch (error) {
      const status = error.response?.status;

      setStatus(
        errorMessages[status]
          ? `${status} -> ${errorMessages[status]}`
          : "An unexpected error occurred!"
      );

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <div style={{ background: "white" }}>
        <Breadcrumbs />
      </div>
      {loading ? <h2>Loading...</h2> : <h2>Your status: {status}</h2>}
      <div>
        <PostsList />
      </div>
    </>
  );
}

export default App;
