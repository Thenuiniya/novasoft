import React from "react";
import "./ServicePanel.css"; // renamed css file
import { MdOutlineDocumentScanner } from "react-icons/md";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { MdOutlinePayments } from "react-icons/md";
import { TbUsers } from "react-icons/tb";
import { AiOutlineGlobal } from "react-icons/ai";


const ServicePanel = () => {
  const services = [
    {
      icon: <MdOutlineDocumentScanner />
      , label: "Smart Speaker"
    },
    {
      icon: <CgSmartHomeWashMachine />
      , label: "POS Machine"
    },
  ];

  const management = [
    {
      icon: <MdOutlinePayments />
      , label: "Payment Settings"
    },
    {
      icon: <TbUsers />
      , label: "Manage Staff"
    },
    {
      icon: <AiOutlineGlobal />
      , label: "Change Language"
    },
  ];

  const FeatureCard = ({ icon, label }) => (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <span className="feature-text">{label}</span>
    </div>
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12 mb-3">
          <div className="panel-block">
            <h6 className="panel-title">BUSINESS SERVICES</h6>
            <div className="row">
              {services.map((item, i) => (
                <div className="col-6 col-md-4 mb-3" key={i}>
                  <FeatureCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="panel-block">
            <h6 className="panel-title">MANAGE BUSINESS</h6>
            <div className="row">
              {management.map((item, i) => (
                <div className="col-6 col-md-4 mb-3" key={i}>
                  <FeatureCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ServicePanel;
