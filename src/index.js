import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import RouterComponent from "./Router";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="csjg-authenticate-user.eu.auth0.com"
    clientId="xtEJq9GPXFS5IQh5FiWqzw4aNoNvVFIP"
    redirectUri={window.location.origin}
  >
    <RouterComponent />
  </Auth0Provider>,
  document.getElementById("root")
);
