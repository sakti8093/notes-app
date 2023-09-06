import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import SideBar from "./components/sideBar";

function App() {
  const data = [
    {
      name: "Cuvette Notes",
      color: "blue",
    },
  ];
  const [showModal, setShowModaL] = useState(false);

  const handleModal = () => {
    setShowModaL(!showModal);
  };

  return (
    <div>
      <SideBar handleModal={handleModal} data={data} />
      {showModal && <Modal />}
    </div>
  );
}

export default App;
