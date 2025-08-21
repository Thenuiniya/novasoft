import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import QuickActions from './QuickActions'
import './Profile.css'
import PaymentImg from "../assests/transctions.png"
import ServicePanel from './ServicePanel'


export default function Profile() {
  return (
    <Container fluid className='mt-0'>
      <Container fluid className="promo-banner my-2">
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={7} className="text-section">
            <h2 className="promo-title">
              Pay <span className="highlight">₹1/month*</span> for the <b>QPay POS Device</b>
            </h2>
            <p className="promo-subtext">
              One device for accepting all modes of payments
            </p>
            <Button className="promo-btn btn-djf">Download App Now!</Button>
          </Col>

          {/* Right Image */}
          <Col md={5} className="image-section text-center">
            <img src={PaymentImg} alt="payment" className="promo-img " height="100px" />
          </Col>
        </Row>
      </Container>
      <div className='mt-5 mb-3'>
        <QuickActions />

      </div>

      <ServicePanel />
    </Container>
  )
}
