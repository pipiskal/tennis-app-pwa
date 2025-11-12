import { Route, Routes } from "react-router";
import getAuthRoutes from "./react-router-routes/auth";
import getComponentsRoute from "./react-router-routes/components-display";
import getMainAppRoutes from "./react-router-routes/main-app";

const App = () => {
  return (
    <Routes location={location}>
      {getAuthRoutes()}

      {getComponentsRoute()}

      {getMainAppRoutes()}

      <Route path="*" element={<div> Not Found</div>} />
    </Routes>
  );
};

export default App;
