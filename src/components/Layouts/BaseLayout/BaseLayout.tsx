import { Outlet } from "react-router";
import s from "./BaseLayout.module.css";

const BaseLayout = () => {
  return (
    <div className={s.container}>
      <Outlet />
    </div>
  );
};

export default BaseLayout;
