import { Route, Routes } from "react-router";
import getAuthRoutes from "./routes/auth";

const App = () => {
  return (
    <Routes location={location}>
      {getAuthRoutes()}

      <Route path="*" element={<div> Not Found</div>} />
    </Routes>
  );
};

export default App;
