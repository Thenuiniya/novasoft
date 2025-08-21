import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import StatsCards from "./StatsCard";
import LeadsTable from "./LeadsTable";
import AddLeadModal from "./AddLeadModel";
import "./Dashboard.css"
import PaymentImg from "../assests/paymentImg.png"
import DashboardCards from "./DashboardCards";
import FinanceCards from "./FinanceCards";


export default function Dashboard({ onNavigate }) {
  const [showModal, setShowModal] = useState(false);

  const mockRows = [
    { id: "LEAD-1042", name: "Arun Kumar", status: "In Progress", priority: "High", assignee: "Nisha", date: "2025-08-14" },
    { id: "LEAD-1041", name: "Kavya M", status: "Completed", priority: "Low", assignee: "Ravi", date: "2025-08-12" },
    { id: "LEAD-1039", name: "Sathish R", status: "Pending", priority: "Medium", assignee: "Priya", date: "2025-08-10" },
    { id: "LEAD-1037", name: "Meena R", status: "In Progress", priority: "High", assignee: "Rahul", date: "2025-08-09" },
  ];

  return (
    <Container fluid className="mt-0">

      <Container fluid className="promo-banner my-2">
        <Row className="align-items-center">
          {/* Left Content */}
          <Col xs={12} md={7} style={{ zIndex: "1000" }} className="text-section text-center text-md-start mb-3 mb-md-0">
            <h2 className="promo-title">
              Pay <span className="highlight">₹1/month*</span> for the <b>QPay POS Device</b>
            </h2>
            <p className="promo-subtext">
              One device for accepting all modes of payments
            </p>
            <Button className="promo-btn btn-djf">Download App Now!</Button>
          </Col>

          {/* Right Image */}
          <Col xs={12} md={5} className="image-section text-center ">
            <img src={PaymentImg} alt="payment" className="promo-img" />
          </Col>
        </Row>
      </Container>

      <StatsCards />
      <DashboardCards onNavigate={onNavigate} />
      <div className="mt-3 mb-5">

        <FinanceCards onNavigate={onNavigate} />
      </div>



    </Container>
  );
}
