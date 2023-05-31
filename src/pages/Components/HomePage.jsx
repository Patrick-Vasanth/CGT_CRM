import "./Assest/Style.css";
import NavBar from "./NavBar";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="home">
        <div className="container">
          <div className="count">
            <div className="title">
              <h1>CAREER GUIDANCE TECHNOLOGIES</h1>
            </div>
            <div className="counting">
              <div className="count1">
                <div className="sub-title1">
                  <p>
                    Total <br /> Number of <br /> Students
                  </p>
                </div>
                <div className="number1">
                  <h1>500</h1>
                </div>
              </div>
              <div className="count2">
                <div className="sub-title2">
                  <p>
                    Total <br /> Number of <br /> Referrals
                  </p>
                </div>
                <div className="number2">
                  <h1>300</h1>
                </div>
              </div>
              <div className="count3">
                <div className="sub-title2">
                  <p>
                    Total <br /> Number of <br />
                    Active Students
                  </p>
                </div>
                <div className="number3">
                  <h1>300</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
