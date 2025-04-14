// src/components/Receipt/Receipt.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import "./Receipt.css";

const Receipt = () => {
  const { state } = useLocation();

  const { bookingData, residencyData, paymentStatus, transactionId } =
    state || {};

  return (
    <>
      <div className="receipt-wrapper">
        <div className="innerWidth paddings receipt-container">
          <div className="info">Please take the screenshot of the receipt for future purpose. Thank you.</div>
          <div className="flexColStart receipt">
            <div className="rec-head">
              <div className="primaryText">Booking Confirmation Receipt</div>
              <div className="secondaryText orangeText">
                Happy to have you !!
              </div>
            </div>

            <div className="lessor-detail">
              <div className="flexCenter logo-container">
                <img src="/logo.png" alt="" width={75} />
              </div>
              <div className="lessor-info">
                <p>
                  <strong>Lessor Name :</strong> "Name of landlord/landlady"
                </p>
                <p>
                  <strong>Phone No. :</strong> "0123456789"
                </p>
                <p>
                  <strong>Address :</strong> " ........... "
                </p>
              </div>
            </div>

            <div className="property">
              <div className="book-head orangeText">Property details</div>
              <p>
                <strong>Name:</strong> {residencyData?.name || "N/A"}
              </p>
              <p>
                <strong>Location:</strong> {residencyData?.detail || "N/A"}
              </p>
              <p>
                <strong>Rent per month:</strong> ₹
                {residencyData?.price || "N/A"}
              </p>
              <p>
                <strong>Booking Date:</strong> {bookingData.dateOfBooking}
              </p>
              <p>
                <strong>Booking Period:</strong> {bookingData.duration}
              </p>
            </div>

            <div className="tenant">
              <div className="book-head orangeText">Tenant details</div>
              <p>
                <strong>Name :</strong>{" "}
                {bookingData
                  ? `${bookingData.firstName} ${bookingData.lastName}`
                  : "N/A"}
              </p>
              <p>
                <strong>Phone No. :</strong> {bookingData?.phone || "N/A"}
              </p>
              <p>
                <strong>D.O.B. :</strong> {bookingData?.dateOfBirth || "N/A"}
              </p>
              <p>
                <strong>Aadhar Card No. :</strong>{" "}
                {bookingData?.aadharNo || "N/A"}
              </p>
              <p>
                <strong>Permanent Address :</strong>{" "}
                {bookingData?.permanentResidence || "N/A"}
              </p>
            </div>

            <div className="payment-details">
              <div className="book-head orangeText">Payment details</div>
              <p>
                <strong>Payment Type:</strong>{" "}
                {bookingData?.paymentType || "N/A"}
              </p>
              {paymentStatus === "online" ? (
                <>
                  <p>
                    <strong>Payment Status:</strong> Successful
                  </p>
                  <p>
                    <strong>Transaction ID:</strong> {transactionId || "N/A"}
                  </p>
                  <p>
                    <strong>Payment Date:</strong>{" "}
                    {bookingData.paymentDate || "N/A"}
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Payment Status:</strong> Pay on Visit
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Receipt;
