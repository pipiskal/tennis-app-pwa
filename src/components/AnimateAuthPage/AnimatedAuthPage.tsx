import { motion } from "framer-motion";

type AnimatedAuthPageProps = {
  children: React.ReactNode;
};

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100%", // Start from left
  },
  in: {
    opacity: 1,
    x: 0, // Center position
  },
  out: {
    opacity: 0,
    x: "100%", // Exit to left
  },
} as const;

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
} as const;

const AnimatedAuthPage = ({ children }: AnimatedAuthPageProps) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        // position: "absolute",
        width: "100%",
        height: "100%",
        border: "1px solid red",
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedAuthPage;
