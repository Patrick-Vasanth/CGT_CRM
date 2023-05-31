import "./Assest/Profile.css";
import NavBar from "./NavBar";

export default function ReferralProfile() {
  return (
    <>
      <NavBar />
      <div className="main-content">
        <div className="container">
          <div className="cards">
            <div className="row row1">
              <div className="col-5 referral">
                <div className="referral-card ">
                  <div className="title-card1">
                    <div className="title1">
                      <h5>Referral Details</h5>
                    </div>
                    <div className="referral-cards1">
                      <div className="referral-details">
                        <div className="details-label1">
                          <div>Referral Name &nbsp;:&nbsp; John</div>
                          <div>Contact Number &nbsp;:&nbsp; 7894561237</div>
                          <div>Company Name &nbsp;:&nbsp; TCS</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="referral-card3 ">
                  <div className="title-card4">
                    <div className="title1">
                      <h5>Course Progress </h5>
                    </div>
                    <div className="referral-cards3 referral-progress">
                      <div className="referral-details1">
                        <div className="details-label2">
                          <div>Number of Referrals &nbsp;:&nbsp; 12</div>
                          <div>No. of Active Referrals &nbsp;:&nbsp; 8</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-7 referral-table">
                <div className="studentTableData1">
                  <table className="studentTable1 table-striped">
                    <thead className="studentTableHeading1">
                      <tr className="studentHeading1">
                        <th className="studentHead1">ID</th>
                        <th className="studentHead2">Student Name</th>
                        <th className="studentHead3">Course</th>
                      </tr>
                    </thead>
                    <tbody className="studentTableBody">
                      <tr className="studentBody">
                        <td className="studentBody1">001</td>
                        <td className="studentBody2">Tamizh</td>
                        <td className="studentBody3">Front End Development</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
