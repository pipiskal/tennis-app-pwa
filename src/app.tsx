import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";
import getAuthRoutes from "./routes/Auth";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        {getAuthRoutes()}

        <Route path="*" element={<div> Not Found</div>} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
