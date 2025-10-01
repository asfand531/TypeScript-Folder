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

    try {
      const response = await axios.get("https://dummyjson.com/products/");
      const data = response.data.products;
      const status = response.status;

      // 1. Informational: It means request was recieved and is continuing.
      if (status === 100) {
        setStatus(status + " -> Continue");
      }
      // 2. Success: The request succeeded.
      else if (status === 200) {
        response.statusText = "You win!";
        setStatus(status + " -> OK 'Request successful!'");
      } else if (status === 201) {
        setStatus(status + " -> Created, 'New resource created!'");
      } else if (status === 204) {
        setStatus(
          status + " -> No Content, 'Successful, but no body returned!'"
        );
      }

      console.log(data);
    } catch (error) {
      // 3. Redirection: Client must take additional action.
      if (error.status === 301) {
        setStatus(error.status + " -> Moved Permanently!");
      } else if (error.status === 302) {
        setStatus(error.status + " -> Found!");
      } else if (error.status === 304) {
        setStatus(error.status + " -> Not Modified!");
      }
      // 4. Client Errors: Something is wrong with the request.
      else if (error.status === 400) {
        setStatus(error.status + " -> Bad Request!");
      } else if (error.status === 401) {
        setStatus(error.status + " -> Unauthorized!");
      } else if (error.status === 403) {
        setStatus(error.status + " -> Forbidden!");
      } else if (error.status === 404) {
        setStatus(error.status + " -> Not Found!");
      } else if (error.status === 429) {
        setStatus(error.status + " -> Too Many Requests!");
      }
      // 5. Server Errors: Something went wrong on the server.
      else if (error.status === 500) {
        setStatus(error.status + " -> Internal Server Error!");
      } else if (error.status === 502) {
        setStatus(error.status + " -> Bad Gateway!");
      } else if (error.status === 503) {
        setStatus(error.status + " -> Service unavaliable!");
      } else if (error.status === 504) {
        setStatus(error.status + " -> Gateway Timeout!");
      }

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
