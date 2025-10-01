import axios from "axios";

function Axios_Interceptors() {
  const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
    headers: {
      "Content-Type": "application/json",
    },
  });

  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <>
      <div></div>
    </>
  );
}

export default Axios_Interceptors;
