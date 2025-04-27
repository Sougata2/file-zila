import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      Cookies.get("access_token") === undefined ||
      Cookies.get("refresh_token") === undefined
    ) {
      return navigate("/");
    }
  }, [navigate]);
  return <>{children}</>;
}
