import { useState } from "react";
import cgtlogo1 from "../Images/Logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Assest/NavBar.css";
export default function NavBar({ navigate }) {
  // const [logbtn, setLogbtn] = useState(false);

  const [showSidebar, setShowSidebar] = useState(false);
  const [showBars, setShowbars] = useState(true);

  const HandleOpen = () => {
    setShowSidebar(true);
    setShowbars(false);
  };
  const HandleClose = () => {
    setShowSidebar(false);
    setShowbars(true);
  };

  // const logOut = (e) => {
  //   e.preventDefault();
  //   console.log("Hai");
  // };

  return (
    <>
      <div className="nav2">
        <div className="logo-nav2">
          <img className="nav2-img" src={cgtlogo1} alt=""></img>
        </div>
        <div className="list-nav2">
          <div className="listItem-nav2">
            <ul>
              <li>
                <Link href="#home" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="refDetails" to="/adminreferral">
                  Referral Details
                </Link>
              </li>
              <li>
                <Link href="stuDetails" to="/adminstudent">
                  Student Details
                </Link>
              </li>
            </ul>
          </div>
          <div className="btn-nav2">
            {/* {logbtn ? (
              <button id="log-btn1">LogIn</button>
            ) : ( */}
            {/* <button id="log-btn2" onClick={() =}>
              Logout
            </button> */}
            <Link to="/login" id="log-btn2">
              Logout
            </Link>
            {/* )} */}
          </div>
          <div className="burger">
            <input type="checkbox" id="check" hidden></input>
            <label
              htmlFor="check"
              className="burger-icon"
              onClick={HandleOpen}
              style={{ display: showBars ? "block" : "none" }}
            >
              <FaBars />
            </label>
          </div>
        </div>
      </div>
      {showSidebar && (
        <div className="dropdwn" id="drop">
          <div className="cls-btn">
            <input type="checkbox" id="close" hidden></input>
            <label htmlFor="close" className="close-icon" onClick={HandleClose}>
              <FaTimes />
            </label>
          </div>

          <div className="listItem-nav2dwn">
            <ul>
              <li>
                <Link href="#home" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="refDetails" to="/adminreferral">
                  Referral Details
                </Link>
              </li>
              <li>
                <Link href="stuDetails" to="/adminstudent">
                  Student Details
                </Link>
              </li>
            </ul>
          </div>
          <div className="btn-nav2dwn">
            {/* {logbtn ? (
              <button id="log-btn1dwn">Log in</button>
            ) : ( */}
            {/* <button >Log out</button> */}
            <Link to="/login" id="log-btn2dwn">
              Logout
            </Link>
            {/* )} */}
          </div>
        </div>
      )}
    </>
  );
}
