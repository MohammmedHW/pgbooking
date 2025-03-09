
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import "./BookingForm.css";

const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const residencyData = location.state?.residencyData || {
    name: "Unknown Residence",
    detail: "Unknown Location",
    price: "0",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // Form state for user details
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    profession: "",
    dateOfBirth: "",
    phone: "",
    currentResidence: "",
    permanentResidence: "",
    aadharNo: "",
    dateOfBooking: "",
    duration: "",
    paymentType: "",
  });

  // State for instruction popup
  const [showPopup, setShowPopup] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    console.log("Residency Details:", residencyData);

    if (formData.paymentType === "Online") {
      // Set up Razorpay options for online payment
      const options = {
        key: "YOUR_TEST_KEY_ID", // Replace with your Razorpay test key ID
        amount: parseInt(residencyData.price) * 100, // Amount in paise
        currency: "INR",
        name: residencyData.name,
        description: "Booking Payment",
        handler: function (response) {
          // Capture the payment date (actual payment date)
          const paymentDate = new Date().toLocaleDateString();
          console.log("Payment Successful:", response);
          // Navigate to receipt page with payment details including paymentDate
          navigate("/receipt", {
            state: {
              bookingData: { ...formData, paymentDate },
              residencyData,
              paymentStatus: "online",
              transactionId: response.razorpay_payment_id,
            },
          });
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          contact: formData.phone,
          aadharNo: formData.aadharNo,
        },
        theme: {
          color: "#4066ff",
        },
      };
    
      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      // For "Pay on Visit" option, navigate directly to the receipt page
      navigate("/receipt", {
        state: {
          bookingData: formData,
          residencyData,
          paymentStatus: "visit",
        },
      });
      alert("Booking submitted with Pay on Visit! Receipt will be generated.");
    }
    
  };

  return (
    <>
      <div className="booking-page-wrapper">
      {showPopup && (
        <>
          <div className="popup-overlay">
            <div className="popup-content">
            <button
                className="popup-close"
                onClick={() => setShowPopup(false)}
              >
                <MdClose/>
              </button>
              <h2>Important Information for Tenants !!</h2>
              <p className="orangeText">
                Please first read all of these carefully and then only proceed.
              </p>
              <ul>
                <li>INSTRUCTION</li>
                <li>INSTRUCTION</li>
                <li>INSTRUCTION</li>
                <li>
                  Before proceeding with your booking, <span className="imp">please contact the
                  landlord to confirm the availability of the selected property.</span>  Do not rent without verifying its availability, as the
                  property may already be rented.
                </li>
                <li>
                  For online payment, you'll be redirected to razorpay payment
                  gateway and after the Successful payment only, receipt will be
                  generated. For "Pay on visit", receipt will be generated after
                  submitting form only. <span className="imp">Please take the screenshot or print the
                  receipt in both the cases for further purpose.</span>
                </li>
              </ul>
              <p>Thank You.</p>
            </div>
          </div>
        </>
      )}
      <section className="bh-wrapper">
        <div className="paddings flexColCenter innerWidth bh-container">
          {/* BOOKING FORM */}
          <div className="booking-form-container">
            <form onSubmit={handleSubmit} className="flexColCenter form">
              <div className="form-head primaryText">
                Step Into Your Ideal Living Experience!
              </div>
              <div className="form-section">
                <div className="section-head orangeText">
                  Residency Details :
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <div className="group-title">Residency Name : </div>
                    <div className="group-data">{residencyData.name}</div>
                  </div>
                  <div className="form-group">
                    <div className="group-title">Location : </div>
                    <div className="group-data">{residencyData.detail}</div>
                  </div>
                  <div className="form-group">
                    <div className="group-title">Rent per month : </div>
                    <div className="group-data">₹ {residencyData.price}</div>
                  </div>
                </div>
              </div>
              <div className="form-section">
                <div className="section-head orangeText">
                  Personal Details :
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>
                      First Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Middle Name</label>
                    <input
                      type="text"
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Last Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Profession</label>
                    <input
                      type="text"
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Date of Birth <span className="required">*</span>
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Phone Number <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Current Residence</label>
                    <input
                      type="text"
                      name="currentResidence"
                      value={formData.currentResidence}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Permanent Residence <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="permanentResidence"
                      value={formData.permanentResidence}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>
                      Adhaar Card no. <span className="required">*</span>
                    </label>
                    <input
                      type="number"
                      name="aadharNo"
                      value={formData.aadharNo}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Date of Booking</label>
                    <input
                      type="date"
                      name="dateOfBooking"
                      value={formData.dateOfBooking}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Duration (in months)</label>
                    <input
                      type="number"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group" style={{ width: "fit-content" }}>
                    <label>Payment Type</label>
                    <div className="flexColStart">
                      <label style={{ marginRight: "2rem" }}>
                        <input
                          type="radio"
                          name="paymentType"
                          value="Online"
                          onChange={handleChange}
                          required
                          style={{ marginRight: "5px" }}
                        />
                        Online Payment
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="paymentType"
                          value="on-visit"
                          onChange={handleChange}
                          required
                          style={{ marginRight: "5px" }}
                        />
                        Pay on Visit
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="button sub-btn">
                    Submit Booking
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      </div>
    </>
  );
};

export default BookingForm;


