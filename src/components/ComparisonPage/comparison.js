import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./comparison.css";

const Comparison = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Row>
        <h2>Compare Satellites</h2>
        <Col className="form-card-container" lg={12}>
          <div className="form-card">
            <form onSubmit={addUserHandler} autocomplete="off">
              <Row>
                <Col lg={6}>
                  <label htmlFor="satelliteOne">Satellite 1</label>
                  <select auto id="satelliteOne" type="text">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </Col>
                <Col lg={6}>
                  <label htmlFor="username">Satellite 2</label>
                  <select id="username" type="text">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </Col>
              </Row>
              <button type="submit">Compare Satellites</button>
            </form>
          </div>
        </Col>
        <Col lg={6}>a</Col>
        <Col lg={6}>a</Col>
      </Row>
    </Container>
  );
};

export default Comparison;
