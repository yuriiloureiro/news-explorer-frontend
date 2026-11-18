import { useState, useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Main from "./pages/Main/Main";
import SavedNews from "./pages/SavedNews/SavedNews";
import LoginModal from "./components/LoginModal/LoginModal";
import SignupModal from "./components/SignupModal/SignupModal";
import CurrentUserContext from "./contexts/CurrentUserContext";
import { getCurrentUser, signin } from "./utils/MainApi";
import "./App.css";

const TOKEN_KEY = "jwt";

function App() {
  const history = useHistory();
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      return;
    }

    getCurrentUser(token)
      .then((user) => setCurrentUser(user))
      .catch(() => localStorage.removeItem(TOKEN_KEY));
  }, []);

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

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, isLoggedIn: Boolean(currentUser) }}
    >
      <div className="page">
        <Switch>
          <Route path="/saved-news">
            <SavedNews
              onSignIn={() => setActiveModal("login")}
              onSignOut={handleSignOut}
            />
          </Route>
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
          />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
