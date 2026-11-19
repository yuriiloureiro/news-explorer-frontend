import { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ProtectedRoute({
  children,
  isCheckingAuth,
  onUnauthorized,
  ...props
}) {
  const { isLoggedIn } = useContext(CurrentUserContext);
  const shouldRedirect = !isCheckingAuth && !isLoggedIn;

  useEffect(() => {
    if (shouldRedirect) {
      onUnauthorized();
    }
  }, [shouldRedirect, onUnauthorized]);

  if (isCheckingAuth) {
    return null;
  }

  return (
    <Route {...props}>{isLoggedIn ? children : <Redirect to="/" />}</Route>
  );
}

export default ProtectedRoute;
