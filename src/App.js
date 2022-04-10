import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import Main from "./components/Main";

const App = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div>
      {isAuthenticated ?  <Main username={user.name}/> : <LoginForm />}
    </div>
  );
};

export default App;
