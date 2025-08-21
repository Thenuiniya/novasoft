import React from "react";
import "./FinancCards.css";

const FinanceCards = ({ onNavigate }) => {
  return (
    <div className="finance-wrapper">
      {/* Settlement Card */}
      <div className="finance-box">
        <div className="finance-header">
          <span className="finance-title">SETTLEMENT</span>
          <span className="finance-amount">₹1,23,816.19</span>
          <span className="finance-arrow">›</span>
        </div>

        <div className="finance-list">
          <div className="finance-item">
            <div>
              <p className="finance-name">Ibrahim</p>
              <p className="finance-date">23 Oct, 09:15 AM</p>
            </div>
            <span className="finance-price">+₹90</span>
          </div>

          <div className="finance-item">
            <div>
              <p className="finance-name">Ibrahim</p>
              <p className="finance-date">23 Oct, 09:15 AM</p>
            </div>
            <span className="finance-price">+₹90</span>
          </div>

          <div className="finance-item">
            <div>
              <p className="finance-name">Ibrahim</p>
              <p className="finance-date">23 Oct, 09:15 AM</p>
            </div>
            <span className="finance-price">+₹90</span>
          </div>
        </div>

        <button onClick={() => onNavigate("history")} className="finance-btn">Settle Now</button>
      </div>

      {/* Transactions Card */}
      <div className="finance-box">
        <div className="finance-header">
          <span className="finance-title">TOTAL TRANSACTIONS</span>
          <span className="finance-amount">₹1,23,816.19</span>
          <span className="finance-arrow">›</span>
        </div>

        <div className="finance-list">
          <div className="finance-item">
            <div>
              <p className="finance-name">Ibrahim</p>
              <p className="finance-date">23 Oct, 09:15 AM</p>
            </div>
            <span className="finance-price">+₹90</span>
          </div>

          <div className="finance-item">
            <div>
              <p className="finance-name">Ibrahim</p>
              <p className="finance-date">23 Oct, 09:15 AM</p>
            </div>
            <span className="finance-price">+₹90</span>
          </div>

          <div className="finance-item">
            <div>
              <p className="finance-name">Ibrahim</p>
              <p className="finance-date">23 Oct, 09:15 AM</p>
            </div>
            <span className="finance-price">+₹90</span>
          </div>
        </div>

        <button className="finance-btn">View All</button>
      </div>
    </div>
  );
};

export default FinanceCards;
