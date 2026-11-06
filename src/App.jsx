import { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Main from "./pages/Main/Main";
import SavedNews from "./pages/SavedNews/SavedNews";
import LoginModal from "./components/LoginModal/LoginModal";
import SignupModal from "./components/SignupModal/SignupModal";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");

  return (
    <BrowserRouter>
      <div className="page">
        <Switch>
          <Route path="/saved-news">
            <SavedNews onEntrar={() => setActiveModal("login")} />
          </Route>
          <Route exact path="/">
            <Main onEntrar={() => setActiveModal("login")} />
          </Route>
          <Redirect to="/" />
        </Switch>

        {activeModal === "login" && (
          <LoginModal
            onClose={() => setActiveModal("")}
            onSwitch={() => setActiveModal("signup")}
          />
        )}
        {activeModal === "signup" && (
          <SignupModal
            onClose={() => setActiveModal("")}
            onSwitch={() => setActiveModal("login")}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
