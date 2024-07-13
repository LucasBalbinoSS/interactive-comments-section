import "./App.css";
import Comment from "./components/Comment";
import Header from "./components/Header";
import Input from "./components/Input";

export default function App() {
  return (
    <>
      <Header />
      <ul className="comments-list">
        <Comment />
      </ul>
      <Input />
    </>
  );
}
