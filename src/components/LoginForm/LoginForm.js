import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../UI/Button/Button.js";
import classes from "./LoginForm.module.css";
import { ContentCard } from "../UI/ContentCard/ContentCard";

const LoginForm = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={classes.header}>
      <ContentCard>
        <div className={classes.content}>
          <h1>Satellite Vision</h1>
          <h4>
            Here you will find out about 100 of the most popular satelites
          </h4>
          <p>but first you will need to login or creat an account</p>
          <Button buttonTitle={"Log In"} onClick={() => loginWithRedirect()} />
        </div>
      </ContentCard>
    </div>
  );
};

export default LoginForm;
