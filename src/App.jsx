import "./App.css";
import SideBar from "./components/sideBar";

const data = [
  {
    name: "Cuvette Notes",
    color: "blue",
  },
];

function App() {
  return (
    <div>
      <SideBar data={data} />
    </div>
  );
}

export default App;
