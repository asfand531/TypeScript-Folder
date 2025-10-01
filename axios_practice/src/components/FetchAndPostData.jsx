import { useEffect, useState } from "react";
import axios from "axios";
import "./FetchAndPostData.css";

function FetchAndPostData() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAndPostTodo = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      const existingTodos = res.data;

      const newTodoRes = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          userId: 11,
          title: "My Todo",
          completed: false,
        }
      );
      const newTodo = newTodoRes.data;

      const updatedTodos = [...existingTodos, newTodo];
      setTodos(updatedTodos);

      console.log("Updated Todos >>>", updatedTodos);
    } catch (err) {
      const errorMessage = {
        400: "Bad Request!",
        401: "Unauthorized!",
        403: "Forbidden!",
        404: "Not Found!",
        429: "Too Many Requests!",
      };
      if (err.status === 404) {
        console.log("Not Found!", errorMessage[404]);
      }
      setError("Failed to fetch or post data!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAndPostTodo();
  }, []);

  if (loading) return <div className="loading"></div>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Todos (old + new together):</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> -{" "}
            {todo.completed ? "Completed" : "Not Completed"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchAndPostData;
