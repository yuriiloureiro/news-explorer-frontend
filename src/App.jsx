import { useState, useEffect, useCallback } from "react";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Main from "./pages/Main/Main";
import SavedNews from "./pages/SavedNews/SavedNews";
import LoginModal from "./components/LoginModal/LoginModal";
import SignupModal from "./components/SignupModal/SignupModal";
import CurrentUserContext from "./contexts/CurrentUserContext";
import { getCurrentUser, signin, signup } from "./utils/MainApi";
import "./App.css";

const TOKEN_KEY = "jwt";

function App() {
  const history = useHistory();
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(
    Boolean(localStorage.getItem(TOKEN_KEY)),
  );

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      return;
    }

    getCurrentUser(token)
      .then((user) => setCurrentUser(user))
      .catch(() => localStorage.removeItem(TOKEN_KEY))
      .finally(() => setIsCheckingAuth(false));
  }, []);

  const openLoginModal = useCallback(() => setActiveModal("login"), []);

  function handleSignOut() {
    localStorage.removeItem(TOKEN_KEY);
    setCurrentUser(null);
    history.push("/");
  }

  function handleLogin({ email, password }) {
    return signin({ email, password })
      .then(({ token }) => {
        localStorage.setItem(TOKEN_KEY, token);
        return getCurrentUser(token);
      })
      .then((user) => {
        setCurrentUser(user);
        setActiveModal("");
      });
  }

  function handleSignup({ name, email, password }) {
    return signup({ name, email, password }).then(() =>
      handleLogin({ email, password }),
    );
  }

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, isLoggedIn: Boolean(currentUser) }}
    >
      <div className="page">
        <Switch>
          <ProtectedRoute
            path="/saved-news"
            isCheckingAuth={isCheckingAuth}
            onUnauthorized={openLoginModal}
          >
            <SavedNews
              onSignIn={() => setActiveModal("login")}
              onSignOut={handleSignOut}
            />
          </ProtectedRoute>
          <Route exact path="/">
            <Main
              onSignIn={() => setActiveModal("login")}
              onSignOut={handleSignOut}
            />
          </Route>
          <Redirect to="/" />
        </Switch>

        {activeModal === "login" && (
          <LoginModal
            onClose={() => setActiveModal("")}
            onSwitch={() => setActiveModal("signup")}
            onLogin={handleLogin}
          />
        )}
        {activeModal === "signup" && (
          <SignupModal
            onClose={() => setActiveModal("")}
            onSwitch={() => setActiveModal("login")}
            onSignup={handleSignup}
          />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
