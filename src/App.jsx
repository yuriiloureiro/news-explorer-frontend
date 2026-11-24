import { useState, useEffect, useCallback } from "react";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Main from "./pages/Main/Main";
import SavedNews from "./pages/SavedNews/SavedNews";
import LoginModal from "./components/LoginModal/LoginModal";
import SignupModal from "./components/SignupModal/SignupModal";
import CurrentUserContext from "./contexts/CurrentUserContext";
import {
  getCurrentUser,
  signin,
  signup,
  getSavedArticles,
  saveArticle,
  deleteArticle,
} from "./utils/MainApi";
import "./App.css";

const TOKEN_KEY = "jwt";

function getErrorMessage(error, fallback) {
  return typeof error === "string" ? error : fallback;
}

function App() {
  const history = useHistory();
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [savedArticles, setSavedArticles] = useState(null);
  const [articleError, setArticleError] = useState("");
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

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    getSavedArticles(localStorage.getItem(TOKEN_KEY))
      .then((articles) => setSavedArticles(articles))
      .catch(() => setSavedArticles([]));
  }, [currentUser]);

  const openLoginModal = useCallback(() => setActiveModal("login"), []);

  function handleSignOut() {
    localStorage.removeItem(TOKEN_KEY);
    setCurrentUser(null);
    setSavedArticles(null);
    setArticleError("");
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

  function handleSaveArticle(article, keyword) {
    if (!currentUser) {
      setActiveModal("signup");
      return;
    }

    const isAlreadySaved = (savedArticles || []).some(
      (saved) => saved.link === article.url,
    );

    if (isAlreadySaved) {
      return;
    }

    setArticleError("");
    saveArticle(localStorage.getItem(TOKEN_KEY), {
      keyword,
      title: article.title,
      text: article.description || article.title,
      date: article.publishedAt,
      source: article.source.name,
      link: article.url,
      image: article.urlToImage,
    })
      .then((newArticle) =>
        setSavedArticles((prevArticles) => [
          newArticle,
          ...(prevArticles || []),
        ]),
      )
      .catch((error) =>
        setArticleError(
          getErrorMessage(error, "Não foi possível salvar o artigo."),
        ),
      );
  }

  function handleDeleteArticle(article) {
    const savedArticle = (savedArticles || []).find(
      (saved) => saved.link === article.url,
    );

    if (!savedArticle) {
      return;
    }

    setArticleError("");
    deleteArticle(localStorage.getItem(TOKEN_KEY), savedArticle._id)
      .then(() =>
        setSavedArticles((prevArticles) =>
          prevArticles.filter((saved) => saved._id !== savedArticle._id),
        ),
      )
      .catch((error) =>
        setArticleError(
          getErrorMessage(error, "Não foi possível remover o artigo."),
        ),
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
              savedArticles={savedArticles}
              onSignIn={() => setActiveModal("login")}
              onSignOut={handleSignOut}
              onDeleteArticle={handleDeleteArticle}
            />
          </ProtectedRoute>
          <Route exact path="/">
            <Main
              savedArticles={savedArticles}
              onSignIn={() => setActiveModal("login")}
              onSignOut={handleSignOut}
              onSaveArticle={handleSaveArticle}
              onDeleteArticle={handleDeleteArticle}
            />
          </Route>
          <Redirect to="/" />
        </Switch>

        {articleError && (
          <p className="page__error" role="alert">
            {articleError}
          </p>
        )}
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
