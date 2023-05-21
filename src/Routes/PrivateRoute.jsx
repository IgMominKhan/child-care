import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Spinner } from "flowbite-react";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return (
      <Spinner
        aria-label="Extra large spinner example"
        size="xl"
      />
    );
  } else if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default PrivateRoute;
