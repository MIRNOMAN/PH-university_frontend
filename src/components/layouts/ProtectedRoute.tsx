import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCurentToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurentToken);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
