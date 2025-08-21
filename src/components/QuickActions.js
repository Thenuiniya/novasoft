import React from "react";
import "./QuickActions.css";
import { CiBank } from "react-icons/ci";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";


const QuickActions = () => {
  const actions = [
    {
      id: 1,
      icon: <CiBank />
      ,
      title: "XXXX 9820",
      subtitle: "ICICI Bank | Chennai Egmore Branch",
    },
    {
      id: 2,
      icon: <MdOutlineBusinessCenter />
      ,
      title: "Business Profile",
      subtitle: "View and edit your business details",
    },
    {
      id: 3,
      icon: <FaRegAddressCard />
      ,
      title: "KYC Verification",
      subtitle: "Unlock exclusive benefits with KYC",
    },
    {
      id: 4,
      icon: <TiShoppingCart />
      ,
      title: "Order QR",
      subtitle: "Get paid, manage & order QRs",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {actions.map((item) => (
          <div key={item.id} className="col-md-3 col-sm-6 mb-4">
            <div className="action-card">
              <div className="action-icon">{item.icon}</div>
              <div className="action-info mt-3">
                <h4 className="action-title">{item.title}</h4>
                <p className="action-sub">{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default QuickActions;
