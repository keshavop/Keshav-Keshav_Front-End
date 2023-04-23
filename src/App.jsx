import WrappedSingleListItem from "./components/WrappedSingleListItem";
import "./App.css";

function App() {
  const items = [
    { text: "Ant" },
    { text: "Dog" },
    { text: "Cow" },
    { text: "Cat" },
  ];

  return (
    <>
        <h1>Steel Eye Assignemnt</h1>
        <WrappedSingleListItem items={items}></WrappedSingleListItem>
        <h3>Keshav</h3>
        <h3>
          GitHub Link
          <a
            href="https://github.com/keshavop/Front-end-Assignment"
            target="_blank"
          >
            Github
          </a>
        </h3>
        <h3>
          Deployed Link
          <a href="https://steeleye-frontend-keshav.vercel.app/" target="_balnk">
            Vercel
          </a>
        </h3>
    </>
  );
}

export default App;
