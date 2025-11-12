import APPLICATION_ROUTES from "../common/routes";
import AuthLayout from "../features/AuthFlow/AuthLayout/AuthLayout";
import Home from "../features/AuthFlow/Home/Home";
import Login from "../features/AuthFlow/Login/Login";
import Register from "../features/AuthFlow/Register/Register";
import { Route } from "react-router";

const getAuthRoutes = () => {
  return (
    <Route element={<AuthLayout />}>
      <Route index element={<Home />} />
      <Route path={APPLICATION_ROUTES.LOGIN} element={<Login />} />
      <Route path={APPLICATION_ROUTES.REGISTER} element={<Register />} />
    </Route>
  );
};

export default getAuthRoutes;
