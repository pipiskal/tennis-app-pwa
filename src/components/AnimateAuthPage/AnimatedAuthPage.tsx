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
  ease: "easeInOut",
  duration: 0.3,
} as const;

const AnimatedAuthPage = ({ children }: AnimatedAuthPageProps) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedAuthPage;
