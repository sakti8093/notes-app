import { useEffect, useState } from "react";
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
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("notes")) || DATA
  );
  const [selectedGroup, setSelectedFroup] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth < 700;

  useEffect(() => {
    // Function to update window width when the window is resized
    const handleResize = () => {
      console.log(window.innerWidth);
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(isMobile);

  const handleModal = () => {
    setShowModaL(true);
  };

  const handleModalClose = () => {
    setShowModaL(false);
  };

  const setGroups = (group) => {
    // add id to every group so that we can use that id for doing operation
    group.id = data.length + 1;
    if (isMobile) {
      setShowModaL(false);
    }
    setData((prev) => {
      let data = [...prev];
      data.push(group);
      localStorage.setItem("notes", JSON.stringify(data));
      return data;
    });
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
    localStorage.setItem("notes", JSON.stringify(copyData));
  };

  return (
    <div className="app">
      {!isMobile && (
        <SideBar
          setSelectedFroup={setSelectedFroup}
          handleModal={handleModal}
          data={data}
          selectedGroup={selectedGroup}
        />
      )}
      {isMobile ? (
        selectedGroup ? (
          <RightSection
            handleModalClose={handleModalClose}
            selectedGroup={selectedGroup}
            addContent={addContent}
            setSelectedFroup={setSelectedFroup}
          />
        ) : (
          <SideBar
            setSelectedFroup={setSelectedFroup}
            handleModal={handleModal}
            data={data}
            selectedGroup={selectedGroup}
          />
        )
      ) : null}
      {showModal && <Modal setGroups={setGroups} />}
      {selectedGroup && !isMobile && (
        <RightSection
          handleModalClose={handleModalClose}
          selectedGroup={selectedGroup}
          addContent={addContent}
        />
      )}
      {!isMobile && !selectedGroup && (
        <DefaultRight handleModalClose={handleModalClose} />
      )}
    </div>
  );
}

export default App;
