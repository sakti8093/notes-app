import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import SideBar from "./components/sideBar";
import RightSection from "./components/RightSection";
import DefaultRight from "./components/DefaultRight";

const DATA = [
  {
    id: 1,
    name: "Cuvette Notes",
    color: "blue",
    data: [
      {
        text: `Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.`,
        date: "9 March 2023",
        time: "10:10 Am",
      },
    ],
  },
];

function App() {
  const [showModal, setShowModaL] = useState(false);
  const [data, setData] = useState(DATA);
  const [selectedGroup, setSelectedFroup] = useState(null);

  const handleModal = () => {
    setShowModaL(true);
  };

  const handleModalClose = () => {
    setShowModaL(false);
  };

  const setGroups = (group) => {
    // add id to every group so that we can use that id for doing operation
    group.id = data.length + 1;
    setData([...data, group]);
  };

  const addContent = (text, formattedDate, time) => {
    //use selected id to change the content of that object;
    const copyData = [...data];
    const copySelectedGroup = { ...selectedGroup };
    const content = {
      text: text,
      date: formattedDate,
      time: time,
    };
    copySelectedGroup.data.push(content);
    copyData[copySelectedGroup.id - 1] = copySelectedGroup;
    setSelectedFroup(copySelectedGroup);
    setData(copyData);
  };

  return (
    <div className="app">
      <SideBar
        setSelectedFroup={setSelectedFroup}
        handleModal={handleModal}
        data={data}
        selectedGroup={selectedGroup}
      />
      {showModal && <Modal setGroups={setGroups} />}
      {selectedGroup ? (
        <RightSection
          handleModalClose={handleModalClose}
          selectedGroup={selectedGroup}
          addContent={addContent}
        />
      ) : (
        <DefaultRight handleModalClose={handleModalClose} />
      )}
    </div>
  );
}

export default App;
