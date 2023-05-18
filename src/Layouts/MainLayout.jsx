import { Outlet } from "react-router-dom";
import Header from "../shared/Header";

const MainLayout = () => {
  return (
    <div className='container'>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
