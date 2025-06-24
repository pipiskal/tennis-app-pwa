import { useParams } from "react-router";

const Notification = () => {
  const { notificationId } = useParams();

  return <div>Notification id : ${notificationId}</div>;
};

export default Notification;
