import React from "react";
import "./Assest/StyleLogin.css";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import User from "../Images/user.png";
import { Link } from "react-router-dom";

export default function LoginCredentials() {
  return (
    <>
      <div className="bg-color">
        <div className="container">
          <div className="main-page">
            <div className="crd1">
              <div className="box1">
                <Link to="/adminlogin">
                  <div>
                    <img src={User} alt="Login Logo" className="User-logo" />
                  </div>
                  <div className="admin">
                    <h3>ADMIN LOGIN</h3>
                  </div>
                </Link>
              </div>
              <div className="box2">
                <Link to="referrallogin">
                  <div>
                    <img src={User} alt="Login Logo" className="User-logo" />
                  </div>
                  <div className="referral">
                    <h3>REFERRAL LOGIN</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
