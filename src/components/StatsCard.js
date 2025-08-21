import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./StatsCard.css"

export default function StatsCards() {
  return (
    <Row className="mb-4 mt-3">
      <Col md={3} sm={6} className="mt-2">
        <Card className="p-4 text-center">
          <h3 className="card-lebel-dash green-color-text">1.5k</h3>
          <h6 className="text-muted">Account Holders</h6>
        </Card>
      </Col>
      <Col md={3}  sm={6} className="mt-2">
        <Card className="p-4 text-center">
          <h3 className="card-lebel-dash green-color-text">2.1k</h3>
          <h6 className="text-muted" >Transactions</h6>
        </Card>
      </Col>
      <Col md={3}  sm={6} className="mt-2">
        <Card className="p-4 text-center">
          <h3 className="card-lebel-dash green-color-text">2.3k</h3>
          <h6 className="text-muted"  >Settlement</h6>
        </Card>
      </Col>
      <Col md={3}  sm={6}className="mt-2">
        <Card className="p-4 text-center">
          <h3 className="card-lebel-dash green-color-text">45k</h3>
          <h6 className="text-muted" >QR Orders</h6>
        </Card>
      </Col>
    </Row>
  );
}
