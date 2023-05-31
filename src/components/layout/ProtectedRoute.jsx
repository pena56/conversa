import { Navigate } from "react-router-dom";
import { useStore } from "../../store";

export default function ProtectedRoute({ children }) {
  const currentUser = useStore((state) => state.currentUser);

  if (!currentUser) return <Navigate to="/auth/signin" />;

  return <>{children}</>;
}
