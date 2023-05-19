import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import FooterCom from "../shared/Footer";

const MainLayout = () => {
  return (
    <div className='container'>
      <Header />
      <Outlet />
      <FooterCom/>
    </div>
  );
};

export default MainLayout;
