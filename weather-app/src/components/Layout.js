import Center from "./Center/Center";
import "./Layout.css";
import Left from "./Left/Left";
import Right from "./Right/Right";

const Layout = () => {
  return (
    <div className="layout-container">
      <Left />
      <Center />
      <Right />
    </div>
  );
};

export default Layout;
