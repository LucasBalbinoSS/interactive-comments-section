import "./App.css";
import Comment from "./components/Comment";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <ul className="comments-list">
        <Comment />
      </ul>
    </>
  );
}
