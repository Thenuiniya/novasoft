import React from "react";
import "./DashboardCards.css";
import qrSample from "../assests/QR.png"
import { useNavigate } from "react-router-dom";

import { Col, Row } from "react-bootstrap";

export default function DashboardCards({ onNavigate }) {
  const navigate = useNavigate();


  const gotoQrpage = () => {
    navigate("/qrcode");   // relative route

  }
  return (
    <div className="dashboard-container">
      <Row>
        <Col md={6} sm={12}>
          <div className="profile-card">
            <h6 className="profile-title">Profile</h6>
            <div className="profile-body">
              <div className="profile-left">
                <div className="profile-progress">
                  <span>30%</span>
                </div>
              </div>
              <div className="profile-right">
                <h6>
                  Complete your profile <br />
                  <ul style={{ lineHeight: "1.8" }} className="">

                    <span className="text-muted "> • Personal KYC <br />
                      • Company KYC <br />
                      • Onboarding details
                    </span>
                  </ul>
                </h6>
              </div>
            </div>
            <button className="profile-btn">Next</button>
          </div>
        </Col>
        <Col md={6} sm={12}>
          <div className="qr-card">
            <h6 className="qr-title">QR</h6>
            <div className="qr-body">
              <div className="qr-left">
                <img src={qrSample} alt="QR" className="qr-img" />
              </div>
              <div className="qr-right">
                <h6 className="">
                  <span className=""> Order QR <br /></span>
                  <ul style={{ lineHeight: "1.8" }} className="">


                    <span className="text-muted "> • Receive Payment <br />
                      • Order new QRs <br />
                      • Download QR
                    </span>
                  </ul>
                </h6>
              </div>
            </div>
            <button onClick={() => onNavigate("qr")}
              className="qr-btn text-white">View More</button>
          </div>
        </Col>
      </Row>
      {/* Profile Card */}


      {/* QR Card */}

    </div>
  );
}
