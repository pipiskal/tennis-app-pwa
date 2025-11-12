import ComponentsDisplay from "../components/componentsDisplay";
import { Route } from "react-router";

const getComponentsRoute = () => {
  return <Route path="components" element={<ComponentsDisplay />} />;
};

export default getComponentsRoute;
