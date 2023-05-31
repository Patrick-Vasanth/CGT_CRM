import "./Assest/Style.css";
import NavBar from "./NavBar";
import Form from "react-bootstrap/Form";
import { FiSearch } from "react-icons/fi";

export default function ReferralFullList() {
  return (
    <>
      <NavBar />
      <div className="admin-referral">
        <div className="bodyBar1">
          <h3 className="bodyBarTitle">Referrals List</h3>
          <Form className="search-input">
            <Form.Control
              type="search"
              placeholder="Referral Search"
              className=" search"
            />
            <FiSearch className="searchIcon" />
          </Form>
        </div>
        <div className="tableData">
          <table className="table table-striped">
            <thead className="tableHeading">
              <tr className="heading">
                <th className="head">ID</th>
                <th className="head">Name</th>
                <th className="head">Contact</th>
                <th className="head">Number of Referrals</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              <tr>
                <td className="body">001</td>
                <td className="body">Patrick</td>
                <td className="body"> 7010326027</td>
                <td className="body">12</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
