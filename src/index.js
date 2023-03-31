import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import LoginPage from "views/examples/LoginPage";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { Provider } from "react-redux";
import { store } from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="557875872712-dlotqojaqheor0cbku9k3s7pkfcph3v7.apps.googleusercontent.com">
        <Switch>
          <Route path="/components" render={() => <Index />} />
          <Route path="/landing-page" render={() => <LandingPage />} />
          <Route path="/register-page" render={() => <RegisterPage />} />
          <Route path="/login-page" render={() => <LoginPage />} />
          <Route path="/profile-page" render={() => <ProfilePage />} />
          <Redirect from="/" to="/components" />
        </Switch>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </Provider>
);
