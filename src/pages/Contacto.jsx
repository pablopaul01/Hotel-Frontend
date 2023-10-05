import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Contacto = () => {
  return (
    <div>
      <div>
        <h1>Contacto</h1>
      </div>
      <div>
      <Form>
      <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
    </Form>
      </div>
    </div>
  );
};

export default Contacto;
