import { Outlet } from "react-router";
import s from "./BaseLayout.module.css";
import { Box } from "@mantine/core";

const BaseLayout = () => {
  return (
    <Box className={s.container}>
      <Outlet />
    </Box>
  );
};

export default BaseLayout;
