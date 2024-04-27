import Content from "./Content";
import Sidebar from "./Sidebar";

const Body = (props) => {
  const rootlevelProp2 = props.rootlevelProp2;
  const setRootlevelProp2 = props.setRootlevelProp2;
  return (
    <div>
      {props.rootlevelProp}
      <Sidebar
        setRootlevelProp2={setRootlevelProp2}
        rootlevelProp2={rootlevelProp2}
      />
      <Content setUserData={props.setUserData} />
    </div>
  );
};

export default Body;
