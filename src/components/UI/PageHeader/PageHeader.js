import React from "react";
import { Row } from "react-bootstrap";
import { Button } from "../Button/Button";
import classes from "./PageHeader.module.css";

export const PageHeader = ({pageDetail}) => {
  const buttonTitle = pageDetail.buttonTitle;
  return (
    <Row>
      <div className={classes.header}>
        <div>
          <h1>{pageDetail.header}</h1>
          <h3>{pageDetail.subHeading}</h3>
        </div>
        <div>
          {buttonTitle ? <Button onClick={pageDetail.onClick} buttonTitle={pageDetail.buttonTitle} /> : <></>}
        </div>
      </div>
    </Row>
  );
};
