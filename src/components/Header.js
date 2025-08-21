import React from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import HeaderLogo from "../assests/Header.png"
import { IoHomeOutline } from "react-icons/io5";

import logo1 from "../assests/logo.PNG"
import profile from "../assests/profile.png"


export default function Header() {
  return (
    // <Navbar expand="lg">
    <Container fluid className="d-flex justify-content-between align-items-center py-2"
      style={{
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
        backgroundColor: "#fff",       // optional: white background
      }}>
      {/* Left Side (Logo) */}
      <div>
        <img src={logo1} alt="QR Logo" className="qr-logo" style={{ height: "50px" }} />
      </div>

      {/* Right Side (Profile + Name) */}
      <div className="d-flex align-items-center">
        <img
          src={profile}
          alt="Profile"
          width="50"
          height="50"
          style={{ borderRadius: "50%", marginRight: "10px" }}
        />
        <div>
          <p className="mb-0 text-muted">Hello</p>
          <h5 className="mb-0">Thomas Shelbey</h5>
        </div>
      </div>
    </Container>
    // </Navbar>
  );
}
