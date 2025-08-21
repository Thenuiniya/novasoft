import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import QrCodeDashboard from "./QrCodeDashboard";
import Profile from "./Profile";
import SettlementHistory from "./SettlementHistory";



export default function Main() {
  const [activePage, setActivePage] = useState("home");
  const [showSidebar, setShowSidebar] = useState(false); // mobile toggle

  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <Dashboard onNavigate={(p) => setActivePage(p)} />;
      case "qr":
        return <QrCodeDashboard />;
      case "history":
        return <SettlementHistory />;
      case "profile":
        return <Profile />;

      default:
        return <h2>Welcome</h2>;
    }
  };

  return (
    <div>
      <Header />

      {/* Mobile Toggle Button */}
      <div className="d-md-none text-start p-2">
        <Button variant="success" onClick={() => setShowSidebar(true)}>
          ☰ Menu
        </Button>
      </div>

      <Container style={{ width: "90%" }} fluid className="mt-3 mb-5">
        <Row>
          {/* Desktop Sidebar */}
          <Col
            md={2}
            lg={2}
            className="p-0 d-none d-md-block"
          >
            <Sidebar
              activePage={activePage}
              onSelect={(p) => {
                setActivePage(p);
                setShowSidebar(false); // close if mobile
              }}
            />
          </Col>

          {/* Content */}
          <Col md={10} lg={10} className="">
            {renderContent()}
          </Col>
        </Row>
      </Container>

      {/* Mobile Sidebar as Offcanvas */}
      <Sidebar
        activePage={activePage}
        onSelect={(p) => {
          setActivePage(p);
          setShowSidebar(false);
        }}
        show={showSidebar}
        onHide={() => setShowSidebar(false)}
        mobile
      />
    </div>
  );
}
