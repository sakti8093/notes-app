import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import SideBar from "./components/sideBar";
import RightSection from "./components/RightSection";
import DefaultRight from "./components/DefaultRight";

const DATA = [
  {
    name: "Cuvette Notes",
    color: "blue",
  },
];

function App() {
  const [showModal, setShowModaL] = useState(false);
  const [data, setData] = useState(DATA);
  const [selectedGroup, setSelectedFroup] = useState(null);

  const handleModal = () => {
    setShowModaL(!showModal);
  };

  const setGroups = (group) => {
    setData([...data, group]);
  };

  return (
    <div className="app">
      <SideBar
        setSelectedFroup={setSelectedFroup}
        handleModal={handleModal}
        data={data}
      />
      {showModal && <Modal setGroups={setGroups} />}
      {selectedGroup ? (
        <RightSection handleModal={handleModal} selectedGroup={selectedGroup} />
      ) : (
        <DefaultRight />
      )}
    </div>
  );
}

export default App;
