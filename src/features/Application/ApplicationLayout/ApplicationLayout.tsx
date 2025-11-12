import styles from "./ApplicationLayout.module.css";
import { Box } from "@mantine/core";
import { useOutlet } from "react-router";
import BottomNavigation from "../../../components/navigation/BottomNavigation/BottomNavigation";

const ApplicationLayout = () => {
  const currentOutlet = useOutlet();

  return (
    <Box className={styles.wrapper}>
      <Box className={styles.header}>Header</Box>

      <Box className={styles.container}>{currentOutlet}</Box>

      <BottomNavigation />
    </Box>
  );
};

export default ApplicationLayout;
