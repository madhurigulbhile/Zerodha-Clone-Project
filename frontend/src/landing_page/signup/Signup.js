import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3002/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      // Store token in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Navigate to dashboard
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .signup-container {
          min-height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont;
        }

        .signup-wrapper {
          max-width: 1100px;
          width: 100%;
          display: flex;
          align-items: center;
          padding: 40px;
        }

        .signup-left {
          flex: 1;
          text-align: center;
        }

        .signup-left img {
          width: 85%;
        }

        .signup-right {
          flex: 1;
          padding-left: 40px;
        }

        .signup-right h1 {
          font-size: 32px;
          font-weight: 500;
          margin-bottom: 12px;
        }

        .signup-right h2 {
          font-size: 22px;
          font-weight: 500;
          margin-top: 25px;
        }

        .sub-text {
          color: #6b7280;
          margin-bottom: 25px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group input {
          width: 100%;
          padding: 12px;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          font-size: 16px;
          box-sizing: border-box;
        }

        .form-group input:focus {
          outline: none;
          border-color: #387ed1;
        }

        .mobile-input {
          display: flex;
          align-items: center;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .country-code {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 12px;
          background: #f9fafb;
          border-right: 1px solid #d1d5db;
          font-size: 14px;
        }

        .country-code img {
          width: 20px;
        }

        .mobile-input input {
          flex: 1;
          padding: 12px;
          border: none;
          outline: none;
          font-size: 16px;
        }

        .signup-btn {
          width: 100%;
          padding: 12px;
          background: #387ed1;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          font-weight: 500;
        }

        .signup-btn:hover {
          background: #2f6cb3;
        }

        .signup-btn:disabled {
          background: #cbd5e1;
          cursor: not-allowed;
        }

        .error-message {
          color: #ef4444;
          font-size: 14px;
          margin-bottom: 15px;
          padding: 10px;
          background: #fee2e2;
          border-radius: 4px;
        }

        .success-message {
          color: #059669;
          font-size: 14px;
          margin-bottom: 15px;
          padding: 10px;
          background: #d1fae5;
          border-radius: 4px;
        }

        .terms {
          font-size: 12px;
          color: #6b7280;
          margin-top: 20px;
        }

        .terms a {
          color: #387ed1;
          text-decoration: none;
        }

        .nri {
          margin-top: 15px;
          font-size: 13px;
        }

        .nri a {
          color: #387ed1;
          text-decoration: none;
        }

        .login-link {
          margin-top: 15px;
          font-size: 14px;
          color: #6b7280;
        }

        .login-link a {
          color: #387ed1;
          text-decoration: none;
        }

        @media (max-width: 900px) {
          .signup-wrapper {
            flex-direction: column;
          }

          .signup-right {
            padding-left: 0;
            margin-top: 40px;
          }

          .signup-left img {
            width: 70%;
          }
        }
      `}</style>

      <div className="signup-container">
        <div className="signup-wrapper">
          <div className="signup-left">
            <img
              src="media/images/signup.png"
              alt="Open Zerodha account"
            />
          </div>

          <div className="signup-right">
            <h1>Signup now</h1>
            <h3 className="sub-text">Create your free Zerodha account</h3>

            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mobile-input">
                <span className="country-code">
                  <span>🇮🇳 +91</span>
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your mobile number"
                  maxLength="10"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="signup-btn"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Signup"}
              </button>
            </form>

            <p className="login-link">
              Already have an account? <a href="/login">Login here</a>
            </p>

            <p className="terms">
              By proceeding, you agree to the Zerodha{" "}
              <a
                href="https://zerodha.com/terms-and-conditions"
                target="_blank"
                rel="noreferrer"
              >
                terms
              </a>{" "}
              &{" "}
              <a
                href="https://zerodha.com/privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                privacy policy
              </a>
            </p>

            <p className="nri">
              Looking to open an NRI account?{" "}
              <a href="https://zerodha.com/open-account/nri">
                Click here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
