import React from "react";
import { Nav, Offcanvas,Row,Col } from "react-bootstrap";
import "./Sidebar.css";
import { FaHeadset } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineHistory } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaArrowDownUpAcrossLine } from "react-icons/fa6";
import bharath from "../assests/bharathlogo.png"




export default function Sidebar({ activePage, onSelect, show, onHide, mobile }) {
  const menuItems = [
    {
      key: "home", label: "Home", icon: <IoHomeOutline />
    },
    {
      key: "qr", label: "QR", icon: <FaHeadset />
    },
    {
      key: "history", label: "History", icon: <MdOutlineHistory />
    },
    {
      key: "profile", label: "Profile", icon: <FaRegCircleUser />
    },

  ];

  const renderMenu = () => (
    <Nav className="flex-column" variant="pills">
      {menuItems.map((item) => (
        <Nav.Link
          key={item.key}
          active={activePage === item.key}
          onClick={() => onSelect(item.key)}
          className={`sidebar-link ${activePage === item.key ? "active-link" : ""}`}
        >
          {item.icon}<span className="ps-3 pt-4">{item.label}</span>
        </Nav.Link>
      ))}
    </Nav>
  );

  if (mobile) {
    return (
      <Offcanvas className="green-color-bg" show={show} onHide={onHide} placement="start">
        <Offcanvas.Header closeButton className="green-color-bg text-white">
          {/* <Offcanvas.Title>Menu</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>{renderMenu()}</Offcanvas.Body>
      </Offcanvas>
    );
  }

  return (
    <div className="sider-container-height">
    <div   style={{
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
   
  }} className="green-color-bg vh-100 p-3">
      {/* <h5 className="text-white mb-4">Menu</h5> */}
      {renderMenu()}
    </div>
    <div className="text-center mt-2">
      {/* <Row  className="text-center">
        <Col md={2} sm={2} >
        </Col>
        <Col md={2} sm={2} className="text-end mt-3">
        <FaArrowDownUpAcrossLine  style={{fontSize:'22px',color:"rgb(33, 149, 216)"}}/>

        </Col>
        <Col style={{color:"orange"}} md={6} sm={6} className="text-start">
            <h6  style={{margin:"auto",paddingTop:"10px"}} >Bharath Connect</h6>

        </Col>
        <Col md={2} sm={2}>
        </Col>
      </Row> */}

 <img
              src={bharath}
              width="80px"
              height="40px"
              alt="Logo"
            
            />
   
     </div>
    </div>
  );
}
