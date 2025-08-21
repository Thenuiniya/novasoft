import React, { useState } from "react";
import { Modal, Button, Pagination } from "react-bootstrap";
import "./SettlementHistory.css";
import { useEffect } from "react";
import axios from 'axios'
import Swal from "sweetalert2";
import { LuAlarmClock } from "react-icons/lu";
import { BsBank } from "react-icons/bs";


import { FaClockRotateLeft } from "react-icons/fa6";

const SettlementHistory = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activePage, setActivePage] = useState(7); // current active page

  const handleOpen = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  const [data, setData] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(0); // backend starts at 0
  const [totalPages, setTotalPages] = useState(1);



  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWIwZGViMjc1IiwiZ3JvdXBJZCI6IjIxMDYxIiwiaXNzIjoiMjgyMDUifQ.ADopz72M1Z-eKpFXJd04RZvLxXHyJ8fFaT4HnzxxQCk";




  useEffect(() => {
    const fetchData = async () => {
      // Show loading popup
      Swal.fire({
        title: "Loading...",
        text: "Fetching transactions",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      try {
        const res = await axios.get(
          `https://64.227.189.27/wallet/api/v1/transaction_history`,
          {
            params: {
              service_id: 111,
              page: page,
            },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("API Response:", res.data);
        setTransactions(res.data);
        setData(res.data.data);
        setTotalPages(res.data.totalPages);

        // Close loading popup
        Swal.close();
      } catch (err) {
        Swal.close(); // close loading even on error
        console.error("API Error:", err.response?.status, err.response?.data);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to fetch transactions",
        });
      }
    };

    fetchData();
  }, [page]);



  console.log(transactions, "tranciton")
  console.log("React running on:", window.location.protocol);


  console.log(data, "data")

  // Handle Page Click

  function formatDate(dateString) {
    const d = new Date(dateString);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0"); // 0-based
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  }



  return (
    <div className="settlement-container">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="title">Settlement History</h5>
        <Button variant="outline-success">Download statement</Button>
      </div>

      {/* Info Banner */}
      <div className="alert alert-success d-flex justify-content-between align-items-center">
        <span>
          <FaClockRotateLeft  style={{fontSize:"22px",color:"#41794A"}}/> Today’s total collection will be auto-settled by <b>08:00 AM, 23rd Oct’25</b> Tomorrow.
        </span>
        <Button className="btn-success" onClick={handleOpen}>
         <LuAlarmClock  style={{fontSize:"22px"}}/> Settle Now!
        </Button>
      </div>

      {/* Table */}

      <div className="table-scroll-x">

        <table className="table table-hover">
          <thead>
            <tr>
              <th>User Id</th>
              <th>Date & Time</th>
              <th>Account</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.user_id}</td>
                <td>{formatDate(d.created_date)}</td>
                <td>{d.service_action_type}</td>
                <td>{d.amount}</td>
                <td>
                  <span className={`status-badge ${d.status.toLowerCase()}`}>
                    {d.status}
                  </span>
                </td>
                <td><a href="#">View</a></td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>


      {/* Pagination */}
      <div
  style={{
    marginTop: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "8px",
  }}
>
  {[...Array(totalPages)].map((_, i) => (
    <button
      key={i}
      onClick={() => setPage(i)}
      style={{
        minWidth: "40px",
        padding: "8px 12px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        background: page === i ? "#41794A" : "#fff",
        color: page === i ? "#fff" : "#333",
        cursor: "pointer",
        transition: "all 0.2s",
      }}
      onMouseEnter={(e) => (e.target.style.background = page === i ? "#41794A" : "#f0f0f0")}
      onMouseLeave={(e) => (e.target.style.background = page === i ? "#41794A" : "#fff")}
    >
      {i + 1}
    </button>
  ))}
</div>

      {/* Popup Modal */}
      <Modal show={showPopup} onHide={handleClose} centered style={{ maxWidth: "100%" }}>
        <Modal.Header closeButton>
          <Modal.Title>Manage QR/POS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="popup-section">
            <div className="d-flex justify-content-between">
              <span><BsBank  /> Today's Total Collection</span>
              <strong>₹1,023</strong>
            </div>
            <p className="text-success mb-1"> <BsBank style={{color:"#41794A"}} /> Already Settled ₹100</p>

            <hr />

            <div className="mb-2">
              <small>Settlement Calculation</small>
              <div className="d-flex justify-content-between"><span>Amount yet to be settled</span><b>₹923</b></div>
              <div className="d-flex justify-content-between"><span>Past pending amount</span><b>09214124127</b></div>
              <div className="d-flex justify-content-between"><span>Charges</span><b>07 Aug, 2024</b></div>
            </div>

            <hr />

            <div className="d-flex justify-content-between">
              <span>Today's Total Collection</span>
              <b>₹1,023</b>
            </div>

            <div className="alert alert-success mt-3 d-flex justify-content-between align-items-center">
              <span>
                Tap <b>Settle Now</b> to instantly get settlements in your bank account.
              </span>
              <Button variant="success">Settle Now</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SettlementHistory;
