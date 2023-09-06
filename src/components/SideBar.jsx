import "./sidebar.css";
const SideBar = ({ data }) => {
  return (
    <div className="sidebar">
      <p>Pocket Notes</p>
      <div className="groups">
        <div className="create-btn">
          <p> + Create Notes group</p>
        </div>
        {data?.map((elem, key) => (
          <div key={key} className="group">
            <div style={{ backgroundColor: elem.color }} className="group-logo">
              <p>{elem?.name?.substring(0, 2).toUpperCase()}</p>
            </div>
            <p>{elem.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
