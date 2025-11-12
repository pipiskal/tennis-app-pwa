import { Route } from "react-router";
import MyBookings from "../features/Application/MyBookings/MyBookings";
import ApplicationLayout from "../features/Application/ApplicationLayout/ApplicationLayout";
import BookCourt from "../features/Application/BookCourt/BookCourt";
import FindAnOpponent from "../features/Application/FindAnOpponent/FindAnOpponent";
import Profile from "../features/Application/Profile/Profile";
import Dashboard from "../features/Application/Dashboard/Dashboard";
import APPLICATION_ROUTES from "../common/routes";

const getMainAppRoutes = () => {
  return (
    <Route element={<ApplicationLayout />}>
      <Route path={APPLICATION_ROUTES.DASHBOARD} element={<Dashboard />} />

      <Route path={APPLICATION_ROUTES.MY_BOOKINGS} element={<MyBookings />} />

      <Route path={APPLICATION_ROUTES.BOOK_COURT} element={<BookCourt />} />

      <Route
        path={APPLICATION_ROUTES.FIND_OPPONENT}
        element={<FindAnOpponent />}
      />

      <Route path={APPLICATION_ROUTES.PROFILE} element={<Profile />} />
    </Route>
  );
};

export default getMainAppRoutes;
