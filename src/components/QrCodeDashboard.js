import React, { useState } from "react";
import "./QrCodeDashboard.css";
import qrSample from "../assests/QR.png"
import { IoDownloadOutline } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";

import { Container, Row, Col, Button, Form } from "react-bootstrap";

import { MdOutlineFileDownload } from "react-icons/md";

import logo1 from "../assests/logo.PNG"

const QrCodeDashboard = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [openDropdown, setOpenDropdown] = useState(null); // toggle
  const [statusValues, setStatusValues] = useState({}); // store selection per QR

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleStatusChange = (id, value) => {
    setStatusValues((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="qr-dashboard">

      <Row>
        <Col md={6} sm={12}>
          <div className="qr-left">
            <img
              src={logo1}
              alt="QR Logo"
              className="qr-logo"
            />


            <div className="qr-box">
              <img
                src={qrSample} width="300px" height="300px" alt="Main QR"
                className="main-qr"
              />
              <p className="upi-id">UPI ID: 9876543210@qpay<span className="green-color-text ps-2"><FaRegCopy /></span>
              </p>
              <p className="upi-name">Ibrahim Mohammedali</p>
              <div className="qr-buttons mb-4 mx-3">
                <button className="qr-btn download"><MdOutlineFileDownload style={{fontSize:"22px"}} /> Download</button>
                <button className="qr-btn share"> <IoShareSocialOutline  style={{fontSize:"22px"}}/> Share</button>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} sm={12} className="below-down">
          <div className="qr-right">
            {/* Tabs */}
            <div className="qr-tabs">
              <button
                className={`qr-tab ${activeTab === "active" ? "active" : ""}`}
                onClick={() => setActiveTab("active")}
              >
                Active QR Codes
              </button>
              <button
                className={`qr-tab ${activeTab === "requests" ? "active" : ""}`}
                onClick={() => setActiveTab("requests")}
              >
                QR Code Requests
              </button>
            </div>

            {/* Active QR Codes */}
            {activeTab === "active" && (
              <div className="qr-list">
                {[1, 2, 3].map((id) => (
                  <div  key={id} className="qr-item">
                    <div style={{border:"1px solid rgb(216, 212, 212)",borderRadius:"5px"}}>
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=activeQR"
                      alt="Mini QR"
                      className="mini-qr p-2"
                    />
                    </div>
                    <div className="qr-details">
                      <p className="qr-title">Q201946579</p>
                      <p className="qr-sub">All Marketing Sales</p>
                      <p className="qr-sub">Terminal {id}</p>
                    </div>
                  </div>
                ))}
                <button className="qr-more-btn">Request more QR Codes</button>
              </div>
            )}

            {/* Requests List with Radio Dropdown */}
            {activeTab === "requests" && (
              <div className="qr-list">
                {[1, 2].map((id) => (
                  <div key={id} className="qr-item request-item">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=requestQR"
                      alt="Mini QR"
                      className="mini-qr"
                    />
                    <div className="qr-details">
                      <p className="qr-title">All Marketing Sales</p>
                      <p className="qr-sub">
                        45, Bharathi Nagar, VOC Port Authority
                      </p>
                      <p className="qr-sub">Requested on 26.04.2025</p>

                      {/* Dropdown Toggle */}
                      <div
                        className={`qr-status ${openDropdown === id ? "open" : ""}`}
                        onClick={() => toggleDropdown(id)}
                      >
                        ✔ QR Request Accepted
                      </div>

                      {/* Radio Buttons */}
                      {openDropdown === id && (
                        <div className="qr-radio-box">
                          <label>
                            <input
                              type="radio"
                              name={`status-${id}`}
                              value="Awaiting Production"
                              checked={statusValues[id] === "Awaiting Production"}
                              onChange={() =>
                                handleStatusChange(id, "Awaiting Production")
                              }
                            />
                            Awaiting Production
                          </label>
                          <label>
                            <input
                              type="radio"
                              name={`status-${id}`}
                              value="Awaiting Dispatch"
                              checked={statusValues[id] === "Awaiting Dispatch"}
                              onChange={() =>
                                handleStatusChange(id, "Awaiting Dispatch")
                              }
                            />
                            Awaiting Dispatch
                          </label>
                          <label>
                            <input
                              type="radio"
                              name={`status-${id}`}
                              value="Awaiting Delivery"
                              checked={statusValues[id] === "Awaiting Delivery"}
                              onChange={() =>
                                handleStatusChange(id, "Awaiting Delivery")
                              }
                            />
                            Awaiting Delivery
                          </label>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Col>
      </Row>
      {/* Left Section */}


      {/* Right Section */}

    </div>
  );
};

export default QrCodeDashboard;
