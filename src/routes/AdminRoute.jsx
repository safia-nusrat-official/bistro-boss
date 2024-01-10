import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { isAdmin, isPending } = useAdmin();
  const location = useLocation()

  if (isPending || loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  if (user && isAdmin) {
    return children;
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
};

export default AdminRoute;
