import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <container>
        <Row>
          <Col className="text-center" py-3>
            <p>Dibbs Gaming &copy; {currentYear}</p>
          </Col>
        </Row>
      </container>
    </footer>
  );
};

export default footer;
