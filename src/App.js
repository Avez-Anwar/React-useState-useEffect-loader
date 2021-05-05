import axios from "axios";
import "./styles.css";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => {
          setLoading(false);
          setPost(response.data);
          setError("");
        })
        .catch((error) => {
          setLoading(false);
          setPost({});
          setError("Something went wrong");
        });
    }, [2000]);
  });

  return (
    <div className="App">
      {loading ? (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      ) : (
        post.body
      )}
      {error ? error : null}
    </div>
  );
}
