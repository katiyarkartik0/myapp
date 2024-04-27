const Sidebar = (props) => {
  const setRootlevelProp2 = props.setRootlevelProp2;
  return (
    <>
      <h1>Sidebar{props.rootlevelProp2}</h1>
      <button
        onClick={() => {
          setRootlevelProp2("Kartik");
        }}
      >
        Name Change
      </button>
    </>
  );
};

export default Sidebar;
